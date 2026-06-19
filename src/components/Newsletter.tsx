"use client";

import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || status === "loading") return;
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (res.ok) {
        setStatus("done");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="blk" id="about">
      <div className="wrap">
        <div className="signup rv">
          <div>
            <h2>Natural balance,<br />in your inbox.</h2>
            <p>Wellness tips, new drops and member-only offers. No noise.</p>
          </div>
          {status === "done" ? (
            <p style={{ color: "var(--accent)", fontWeight: 600, fontSize: "15px" }}>
              You&apos;re in. We&apos;ll be in touch.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                required
              />
              <button className="btn btn-solid" type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Joining…" : "Join"} <span className="arr">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
