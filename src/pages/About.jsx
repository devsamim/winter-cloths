import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-11/12 mx-auto bg-base-200">
      <div className="mt-8 mb-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="">
            <img
              src="https://i.ibb.co/b537Bs0/about2.jpg"
              className="flex max-w-sm h-[300px] object-cover rounded-lg shadow-2xl lg:ml-10"
              data-aos="zoom-in"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold">About Us</h1>
            <p className="py-6">
              <strong>Our Mission </strong>
              The Winter Clothing Donation platform aims to bring warmth and
              comfort to those in need during the harsh winter months. In
              Bangladesh, thousands of vulnerable individuals, particularly in
              rural and low-income areas, struggle to stay warm due to a lack of
              adequate winter clothing. Our mission is to bridge the gap between
              compassionate donors and those in need, fostering a culture of
              giving and community support.
            </p>
            <div>
              <h3 className="mb-4 text-bold text-2xl underline">
                How You Can Contribute
              </h3>
              <ol className="">
                <li>
                  <span className="font-bold text-xl">
                    Donate Winter Clothes:
                  </span>{" "}
                  Share your unused or extra winter clothing, such as jackets,
                  sweaters, and blankets, to help those in need.
                </li>
                <li>
                  <span className="font-bold text-xl"> Volunteer: </span>Join
                  our network of volunteers to help collect and distribute
                  donations in your local area.
                </li>
                <li>
                  <span className="font-bold text-xl">Spread the Word: </span>{" "}
                  Raise awareness by sharing our platform with friends and
                  family, encouraging them to participate.
                </li>
                <li>
                  <span className="font-bold text-xl">
                    Support Local Campaigns:{" "}
                  </span>{" "}
                  Explore ongoing donation campaigns across different divisions
                  in Bangladesh and contribute directly to the ones that
                  resonate with you.
                </li>
              </ol>
              <p className="mt-4 text-semibold mb-10">
                Together, we can make this winter warmer for everyone. Let's
                unite to spread kindness and compassion!
              </p>
            </div>
            <Link to="/auth/login" className="btn btn-neutral text-white">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
