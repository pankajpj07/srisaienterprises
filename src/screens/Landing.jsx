import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Products from "../components/Sections/Products";
// import Blog from "../components/Sections/Blog";
// import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import WhatsappSticky from "../components/Elements/WhatsppSticky";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Products />
      <Services />
      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact />
      <Footer />
      <WhatsappSticky />
    </>
  );
}
