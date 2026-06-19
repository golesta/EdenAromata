"use client";

import { useEffect } from "react";

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js-reveal");

    const rvEls = [...document.querySelectorAll<HTMLElement>(".rv")];
    rvEls.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 0.06}s`;
    });

    const reveal = (el: HTMLElement) => el.classList.add("in");

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              reveal(e.target as HTMLElement);
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
      );

      rvEls.forEach((el) => io.observe(el));

      const pass = () =>
        rvEls.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.top < window.innerHeight * 0.95 && r.bottom > 0) reveal(el);
        });

      requestAnimationFrame(pass);

      // safety net: never leave content hidden
      const safety = setTimeout(() => rvEls.forEach(reveal), 1500);

      return () => {
        io.disconnect();
        clearTimeout(safety);
        document.documentElement.classList.remove("js-reveal");
      };
    } else {
      rvEls.forEach(reveal);
    }
  }, []);
}
