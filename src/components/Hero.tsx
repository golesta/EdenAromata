import Image from "next/image";

const MARQUEE_ITEMS = [
  ["Vegan", "01"],
  ["Non-GMO", "02"],
  ["Lab Tested", "03"],
  ["UK Made", "04"],
  ["Cruelty-Free", "05"],
  ["CO₂ Extracted", "06"],
  ["Full Spectrum", "07"],
];

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow rv">Premium CBD · CBG Wellness</p>
          <h1 className="serif rv">
            The calm science
            <span className="l2">
              <em>of feeling better.</em>
            </span>
          </h1>
          <p className="lede rv">
            Thoughtfully crafted CBD oils, gummies and softgels — independently lab-tested
            for balance, recovery and better everyday living.
          </p>
          <div className="hero-cta rv">
            <a href="#featured" className="btn btn-solid">
              Shop CBD Oils <span className="arr">→</span>
            </a>
            <a href="#formats" className="btn btn-ghost">
              Explore the range
            </a>
          </div>
        </div>

        <div className="hero-stage rv">
          <Image
            className="photo"
            src="https://images.unsplash.com/photo-1600753231051-f3b526370bb1?auto=format&fit=crop&w=1400&q=80"
            alt="Full spectrum CBD oil dropper"
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          <div className="chip c1"><span className="dot" />1500 mg Full Spectrum</div>
          <div className="chip c2"><span className="dot" />THC &lt; 0.2%</div>
          <div className="chip c3"><span className="dot" />Third-party lab tested</div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {items.map(([word, n], i) => (
          <div className="mq-item" key={i}>
            {word}
            <span>/ {n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
