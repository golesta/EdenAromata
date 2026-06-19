import Image from "next/image";

const POSTS = [
  {
    tag: "Sleep",
    title: "CBD for better sleep: what the science actually says",
    date: "June 02, 2026 · 5 min read",
    href: "/journal/cbd-for-better-sleep",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    alt: "Cup of herbal tea",
  },
  {
    tag: "Guides",
    title: "Oils vs gummies vs softgels — which is right for you?",
    date: "May 31, 2026 · 4 min read",
    href: "/journal/oils-vs-gummies-vs-softgels",
    img: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?auto=format&fit=crop&w=800&q=80",
    alt: "Healthy wellness bowl",
  },
  {
    tag: "Routine",
    title: "Building a daily wellness habit that actually sticks",
    date: "Apr 26, 2026 · 6 min read",
    href: "/journal/building-a-daily-wellness-habit",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    alt: "Morning meditation",
  },
];

export function Journal() {
  return (
    <section className="blk" id="journal">
      <div className="wrap">
        <div className="sec-head rv">
          <h2 className="serif">From the <em>journal</em></h2>
          <p>Simple guides and expert insight to help you make the right choices.</p>
        </div>
        <div className="jgrid">
          {POSTS.map((post) => (
            <a className="jcard rv" href={post.href} key={post.href}>
              <div className="imgwrap">
                <Image
                  className="photo"
                  src={post.img}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className="tag">{post.tag}</span>
              <h3 className="serif">{post.title}</h3>
              <span className="date">{post.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
