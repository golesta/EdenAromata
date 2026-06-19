const ITEMS = [
  { t1: "Lab tested", t2: "Every batch, third-party verified" },
  { t1: "THC < 0.2%", t2: "Fully UK compliant" },
  { t1: "Free UK delivery", t2: "On orders over £40" },
  { t1: "Secure checkout", t2: "Encrypted & protected" },
];

export function TrustStrip() {
  return (
    <section style={{ padding: "0" }}>
      <div className="wrap">
        <div className="trust rv">
          {ITEMS.map((item) => (
            <div key={item.t1}>
              <div className="t1">{item.t1}</div>
              <div className="t2">{item.t2}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
