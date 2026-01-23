import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Technology from "../components/Technology";
import Projects from "../components/Projects";
import WhyUs from "../components/WhyUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Technology />
      <Projects />
      <WhyUs />
      <Footer />
    </div>
  );
}
