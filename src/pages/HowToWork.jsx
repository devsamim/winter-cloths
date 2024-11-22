import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
const HowToWork = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="w-11/12 mx-auto mb-4">
        <div className="bg-base-200 ">
          <div className="hero-content flex-col lg:flex-row">
            <div className="flex flex-col gap-y-5">
              <img
                src="https://i.ibb.co/3RXq92F/about.jpg"
                className="max-w-[250] h-[250px] bg-white md:p-10 rounded-lg shadow-md space-y-6 p-2"
                data-aos="zoom-in"
              />
              <img
                src="https://i.ibb.co/9H5d6m7/donations.png"
                className="max-w-sm h-full bg-white p-6 md:p-10 rounded-lg shadow-md space-y-6 "
                data-aos="zoom-in"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-center mb-10">
                How It Works
              </h1>
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-md space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                  Instructions for Donation
                </h2>
                <p className="text-gray-600">
                  Donating winter clothing through our platform is simple and
                  hassle-free. Follow these steps:
                </p>
                <ol className="list-decimal list-inside space-y-4 text-gray-700">
                  <li>
                    <strong>Sign Up or Log In:</strong>
                    Create an account to access all features, including donation
                    campaigns and private routes.
                  </li>
                  <li>
                    <strong>Explore Campaigns: </strong>
                    Browse active donation campaigns across different regions in
                    Bangladesh. Each campaign includes details such as contact
                    information, division, and the types of clothing needed.
                  </li>
                  <li>
                    <strong>Select a Campaign: </strong>
                    Choose a campaign that resonates with you and click on
                    “Donate Now” to proceed.
                  </li>
                  <li>
                    <strong>Fill Out the Donation Form: </strong>
                    Provide details about the items you're donating, such as
                    type, quantity, and pickup location. Add any notes if
                    needed.
                  </li>
                  <li>
                    <strong>Submit and Confirm: </strong>
                    Once you submit the form, our team will handle the rest.
                    You’ll see a confirmation toast message thanking you for
                    your contribution.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        {/* collection and support */}
        <div className="mt-10">
          <div className="bg-gray-50 p-6 md:p-10 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Collection Points
            </h2>
            <p className="text-gray-600">
              To ensure smooth operations, we’ve set up collection points in key
              areas. These points serve as drop-off locations for donors who
              prefer delivering items themselves. The exact addresses will be
              provided after completing the donation form.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://i.ibb.co/TM9mQwz/dhaka.jpg"
                  alt="Collection Point 1"
                  className="rounded-lg shadow-sm object-cover w-full h-80"
                  data-aos="zoom-in"
                />
                <p className="absolute bottom-2 left-2 bg-white bg-opacity-75 text-gray-800 text-sm font-semibold px-2 py-1 rounded">
                  Dhaka
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://i.ibb.co/6JM3zDX/slyel.jpg"
                  alt="Collection Point 2"
                  className="rounded-lg shadow-sm object-cover w-full h-80"
                  data-aos="zoom-in"
                />
                <p className="absolute bottom-2 left-2 bg-white bg-opacity-75 text-gray-800 text-sm font-semibold px-2 py-1 rounded">
                  Sylhet
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://i.ibb.co/qDPRM3t/dd.jpg"
                  alt="Collection Point 3"
                  className="rounded-lg shadow-sm object-cover w-full h-80"
                  data-aos="zoom-in"
                />
                <p className="absolute bottom-2 left-2 bg-white bg-opacity-75 text-gray-800 text-sm font-semibold px-2 py-1 rounded">
                  Chattogram
                </p>
              </div>
              <div className="relative">
                <img
                  src="https://i.ibb.co/Sf4L53v/ff.jpg"
                  alt="Collection Point 4"
                  className="rounded-lg shadow-sm object-cover w-full h-80"
                  data-aos="zoom-in"
                />
                <p className="absolute bottom-2 left-2 bg-white bg-opacity-75 text-gray-800 text-sm font-semibold px-2 py-1 rounded">
                  Rajshahi
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-md space-y-6  mt-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 w-4/12 mx-auto underline">
            Supported Divisions
          </h2>
          <p className=" w-8/12 mx-auto font-bold text-gray-500">
            Our platform currently supports donation campaigns in the following
            divisions. Our volunteers ensure that every donation reaches its
            intended destination. Together, we can make a meaningful impact this
            winter!
          </p>

          <div className="bg-gray-100 p-6 md:p-10 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border p-4 object-contain lg:w-[350px] rounded-lg text-center hover:bg-yellow-100">
              Supported Divisions
            </h2>
            <p className="text-gray-600">
              Our platform currently supports donation campaigns in the
              following divisions. Our volunteers ensure that every donation
              reaches its intended destination. Together, we can make a
              meaningful impact this winter!
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li>
                <strong>Dhaka:</strong> Targeting low-income families in urban
                slums and nearby areas.
              </li>
              <li>
                <strong>Sylhet:</strong> Assisting rural communities with
                limited access to resources.
              </li>
              <li>
                <strong>Chattogram:</strong> Providing aid to vulnerable coastal
                and hill tracts communities.
              </li>
              <li>
                <strong>Rajshahi:</strong> Reaching underprivileged groups in
                colder northern areas.
              </li>
              <li>
                <strong>Khulna:</strong> Helping those in flood-prone and rural
                regions.
              </li>
              <li>
                <strong>Barishal:</strong> Supporting families in remote
                villages and islands.
              </li>
              <li>
                <strong>Rangpur:</strong> Addressing winter hardships in one of
                the coldest regions of Bangladesh.
              </li>
              <li>
                <strong>Mymensingh:</strong> Assisting rural and underserved
                communities.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowToWork;
