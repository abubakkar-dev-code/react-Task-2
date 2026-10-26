import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Roasting from "../components/Roasting";
import Taste from "../components/Taste";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2F4F8] text-[#111A2E]">
      <Navbar />
      <Hero />
      <Roasting />
      <Taste />
      <Footer />
    </div>
  );
};

export default Home;
