import Section from "@/components/Section"
import Feature from "@/components/Feature"
import Scroll from "@/components/Scroll";
import Testimonials from "@/components/Testimonials";
import Webinar from "@/components/Webinar";
import Instructor from "@/components/Instructor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Section />
      <Feature />
      <Scroll />
      <Testimonials />
      <Webinar />
      <Instructor />
      <Footer />
    </main>
  );
}
