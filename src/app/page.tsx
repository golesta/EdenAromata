import { AnnouncementBar, Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Formats } from "@/components/Formats";
import { ShopByNeed } from "@/components/ShopByNeed";
import { Featured } from "@/components/Featured";
import { Journal } from "@/components/Journal";
import { Testimonial } from "@/components/Testimonial";
import { TrustStrip } from "@/components/TrustStrip";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";
import { RevealProvider } from "@/components/RevealProvider";

export default function HomePage() {
  return (
    <RevealProvider>
      <AnnouncementBar />
      <Nav />
      <main>
        <Hero />
        <Formats />
        <ShopByNeed />
        <Featured />
        <Journal />
        <Testimonial />
        <TrustStrip />
        <Newsletter />
      </main>
      <Footer />
    </RevealProvider>
  );
}
