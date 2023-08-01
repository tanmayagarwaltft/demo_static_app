import React from "react";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Container/Home";
import Features from "../Features/Features";
import Offerings from "../Offerings/Offerings";
import Usage from "../Usage/Usage";
import Footer from "../../Pages/Footer/Footer";

function LandingPage() {
  return (
    <div className="App">
      <Home />
      <div>test</div>
      <About />
      <Offerings />
      <Features />
      <Usage />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default LandingPage;
