const SHOP = ["CBD Oils", "CBD Gummies", "CBD Softgels", "Bundles"];
const COMPANY = ["About us", "Our story", "Quality & testing", "Journal"];
const SUPPORT = ["Learn", "Contact", "Shipping", "Returns"];

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a className="brand" href="/">
              <span className="b1">eden</span>
              <span className="b2">aromate</span>
            </a>
            <p>Premium CBD &amp; CBG wellness — thoughtfully formulated, independently tested, made for modern life.</p>
          </div>

          <div className="fcol">
            <h5>Shop</h5>
            {SHOP.map((l) => <a href="#" key={l}>{l}</a>)}
          </div>

          <div className="fcol">
            <h5>Company</h5>
            {COMPANY.map((l) => <a href="#" key={l}>{l}</a>)}
          </div>

          <div className="fcol">
            <h5>Support</h5>
            {SUPPORT.map((l) => <a href="#" key={l}>{l}</a>)}
          </div>
        </div>

        <div className="foot-bot">
          <span>© 2026 Eden Aromate. All rights reserved.</span>
          <div className="soc">
            <a href="#" aria-label="Facebook">
              <svg viewBox="0 0 24 24">
                <path d="M13 22v-8h3l.5-3.5H13V8.2c0-1 .3-1.7 1.8-1.7H17V3.3C16.6 3.2 15.4 3 14.1 3 11.3 3 9.5 4.7 9.5 7.8v2.7H6.5V14h3v8h3.5z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 3.2A6.6 6.6 0 1 0 18.6 12 6.6 6.6 0 0 0 12 5.4zm0 10.9A4.3 4.3 0 1 1 16.3 12 4.3 4.3 0 0 1 12 16.3zm6.8-11.1a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="compliance">
          These products are not intended to diagnose, treat, cure or prevent any disease.
          Food supplement — not for use by those under 18, pregnant or breastfeeding.
          Consult your doctor before use. All products contain less than 0.2% THC in compliance with UK law.
        </p>
      </div>
    </footer>
  );
}
