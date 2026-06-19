"use client";

import Image from "next/image";
import { useState } from "react";

const STRENGTHS = ["5%", "10%", "20%", "30%"];
const BENEFITS = [
  "Supports everyday balance & calm",
  "Promotes recovery & better sleep",
  "100% natural, vegan & non-GMO",
];

export function Featured() {
  const [active, setActive] = useState(1);

  return (
    <section className="blk" id="featured">
      <div className="wrap">
        <div className="feat rv">
          <div className="stage" style={{ position: "relative" }}>
            <Image
              className="photo"
              src="https://images.unsplash.com/photo-1600753231051-f3b526370bb1?auto=format&fit=crop&w=1200&q=80"
              alt="Full spectrum CBD oil"
              fill
              sizes="(max-width: 1000px) 100vw, 45vw"
              style={{ objectFit: "cover" }}
            />
            <div className="badge">
              Third<br />Party<br />Lab<br />Tested
            </div>
          </div>

          <div className="info">
            <p className="eyebrow">Featured Collection</p>
            <h2>Full Spectrum<br />CBD Oil</h2>
            <p className="price"><s>£64</s> from £49</p>

            <div className="strengths">
              <div className="lab">Available strength</div>
              <div className="str-row">
                {STRENGTHS.map((s, i) => (
                  <button
                    key={s}
                    className={`str${active === i ? " active" : ""}`}
                    onClick={() => setActive(i)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <ul className="benefits">
              {BENEFITS.map((b) => (
                <li key={b}>
                  <span className="tick">
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l5 5L20 6" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="acts">
              <a href="#" className="btn btn-solid">
                Add to cart — £49 <span className="arr">→</span>
              </a>
              <a
                href="#"
                className="btn btn-ghost"
                style={{
                  color: "var(--band-ink)",
                  borderColor: "color-mix(in srgb, var(--band-ink) 30%, transparent)",
                }}
              >
                View details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
