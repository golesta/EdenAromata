"use client";

import { useState, useEffect } from "react";

const QUOTES = [
  {
    text: '"Best CBD oil I\'ve tried — I sleep better and genuinely feel more balanced through the day."',
    who: "Emma R. · Verified buyer",
  },
  {
    text: '"The gummies fit perfectly into my daily routine. Calm without the fog — exactly what I wanted."',
    who: "James T. · Verified buyer",
  },
  {
    text: '"Softgels are so convenient and have really helped with my recovery after training."',
    who: "Sarah L. · Verified buyer",
  },
];

export function Testimonial() {
  const [qi, setQi] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setQi((p) => (p + 1) % QUOTES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="blk" style={{ paddingTop: "30px" }}>
      <div className="wrap">
        <div className="quote rv">
          <div className="stars">★★★★★</div>
          <blockquote>{QUOTES[qi].text}</blockquote>
          <div className="who">{QUOTES[qi].who}</div>
          <div className="qdots">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                className={i === qi ? "on" : ""}
                onClick={() => setQi(i)}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
