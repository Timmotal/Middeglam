import Image from "next/image";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import OurbrowServices from "./components/OurbrowServices";
import About from "./components/About";
import VideoSection from "./components/VideoSection";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/Testimonials";



export default function Home() {
  return (
    <div>
      <div className="bg-[url('/lisatran.jpg')] bg-cover bg-center md:h-screen w-full">
      <Nav />
      <Hero />
      </div>
      <Services />
       <OurbrowServices />
      <About /> 
      <TestimonialSlider />
      <VideoSection />
      <Footer />
    </div>

  );
}
