import Image from "next/image";

const FORMATS = [
  {
    idx: "01 / OILS",
    name: "CBD Oils",
    desc: "Fast-absorbing sublingual drops. Precision-dosed and naturally effective.",
    range: "5% – 30% strengths",
    href: "/collections/cbd-oils",
    img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80",
    alt: "CBD oil dropper bottle",
  },
  {
    idx: "02 / GUMMIES",
    name: "CBD Gummies",
    desc: "Delicious, measured support for everyday wellbeing. Vegan and non-GMO.",
    range: "10 – 25 mg each",
    href: "/collections/gummies",
    img: "https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&w=900&q=80",
    alt: "CBD gummies",
  },
  {
    idx: "03 / SOFTGELS",
    name: "CBD Softgels",
    desc: "Convenient, consistent, formulated for results. Tasteless and travel-ready.",
    range: "15 – 50 mg each",
    href: "/collections/softgels",
    img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80",
    alt: "CBD softgel supplement bottle",
  },
];

export function Formats() {
  return (
    <section className="blk" id="formats">
      <div className="wrap">
        <div className="sec-head rv">
          <h2 className="serif">Find your <em>format</em></h2>
          <p>Three ways to bring CBD into your routine — each one precision-dosed and easy to live with.</p>
        </div>
        <div className="formats">
          {FORMATS.map((f) => (
            <a className="fcard rv" href={f.href} key={f.idx}>
              <div className="img" style={{ position: "relative" }}>
                <Image
                  className="photo"
                  src={f.img}
                  alt={f.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="body">
                <span className="idx">{f.idx}</span>
                <h3 className="serif">{f.name}</h3>
                <p>{f.desc}</p>
                <div className="meta">
                  <span>{f.range}</span>
                  <span className="go">Explore →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
