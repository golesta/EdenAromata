const NEEDS = [
  {
    n: "01",
    title: "Better Sleep",
    desc: "Wind down and support a restful night with CBN-boosted blends.",
    symr: "50%",
    symrot: "0deg",
  },
  {
    n: "02",
    title: "Daily Recovery",
    desc: "Help your body reset after movement, training or long days.",
    symr: "3px",
    symrot: "0deg",
  },
  {
    n: "03",
    title: "Calm Focus",
    desc: "Stay clear, calm and present through demanding moments.",
    symr: "3px",
    symrot: "45deg",
  },
  {
    n: "04",
    title: "Active Living",
    desc: "Fuel an active lifestyle, naturally and consistently.",
    symr: "50%",
    symrot: "0deg",
  },
];

export function ShopByNeed() {
  return (
    <section className="need" id="need">
      <div className="wrap" style={{ paddingTop: "90px" }}>
        <div className="sec-head rv">
          <h2 className="serif">Shop by <em>how you want to feel</em></h2>
          <p>Tell us your goal — we&apos;ll point you to the right formulation.</p>
        </div>
      </div>
      <div className="need-grid">
        {NEEDS.map((item) => (
          <div
            className="ncard rv"
            key={item.n}
            style={
              { "--symr": item.symr, "--symrot": item.symrot } as React.CSSProperties
            }
          >
            <span className="n">{item.n}</span>
            <div className="sym">
              <i />
            </div>
            <h4 className="serif">{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
