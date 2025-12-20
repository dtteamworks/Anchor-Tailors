import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroMobile from "@/components/HeroMobile";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <div id="home" className="hidden md:block">
        <Hero />
      </div>
      <div id="home" className="md:hidden">
        <HeroMobile />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default page;