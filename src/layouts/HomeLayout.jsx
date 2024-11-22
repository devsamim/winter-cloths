import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Slider from "../components/Slider";

const HomeLayouts = () => {
  return (
    <div className="font-Poppins">
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <div>
          <Slider></Slider>
        </div>
        <section>
          <Outlet></Outlet>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default HomeLayouts;
