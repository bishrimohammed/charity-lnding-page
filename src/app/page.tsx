import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import FooterItems from "@/components/FooterItems";
import HeroSection from "@/components/HeroSection";
import NewsEvent from "@/components/NewsEvent";
import OurMission from "@/components/OurMission";
import OurWork from "@/components/OurWork";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <AboutUs />
      <OurMission />
      <OurWork />
      <NewsEvent />
      <FooterItems />
      <Footer />
    </main>
  );
}
