import Link from "next/link";

export function AnnouncementBar() {
  return (
    <div className="topbar">
      Free UK shipping over £40 &nbsp;·&nbsp; Order before <b>10:30 AM</b> for same-day dispatch
    </div>
  );
}

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" href="/" aria-label="Eden Aromate home">
          <span className="b1">eden</span>
          <span className="b2">aromate</span>
        </Link>

        <nav className="menu">
          <Link href="/collections/cbd-oils">CBD Oils</Link>
          <Link href="/collections/gummies">Gummies</Link>
          <Link href="/collections/softgels">Softgels</Link>
          <Link href="/#need">Shop by Need</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="nav-tools">
          <svg className="icn hide-m" viewBox="0 0 24 24" aria-label="Search">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
          <svg className="icn hide-m" viewBox="0 0 24 24" aria-label="Account">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
          </svg>
          <span className="cartdot">
            <svg className="icn" viewBox="0 0 24 24" aria-label="Cart">
              <path d="M6 8h12l-1 12H7L6 8z" />
              <path d="M9 8a3 3 0 0 1 6 0" />
            </svg>
            <b>0</b>
          </span>
          <svg className="icn burger" viewBox="0 0 24 24" aria-label="Menu">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </div>
      </div>
    </header>
  );
}
