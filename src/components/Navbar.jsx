import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import logo from "../assets/logo.avif";
import { toast } from "react-toastify";
import "animate.css";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handleSignOut = () => {
    signOutUser()
      .then((result) => {
        toast.success("Sign Out Successfully..", result);
      })
      .catch((error) => {
        const errors = error.message;
        console.log(errors);
      });
  };

  return (
    <div className=" w-11/12 mx-auto navbar flex justify-between z-10">
      <div className="">
        <Link to="/">
          <img
            className="h-12 rounded-full animate__animated animate__bounce animate__delay-2s animate__flip"
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="dropdown dropdown-end">
        <div className="nav hidden lg:block space-x-5 mt-4 text-[#706F6F] font-bold ">
          <Link
            className="hover:bg-yellow-100 hover:p-2 hover:text-blue-800 hover:rounded-lg"
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:bg-yellow-100 hover:p-2 hover:text-blue-800 hover:rounded-lg"
            to="/auth/campaign"
          >
            Donation Campaigns
          </Link>
          <Link
            className="hover:bg-yellow-100 hover:p-2 hover:text-blue-800 hover:rounded-lg"
            to="/"
          >
            How to Help
          </Link>
          <Link
            className="hover:bg-yellow-100 hover:p-2 hover:text-blue-800 hover:rounded-lg"
            to="/auth/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className="hover:bg-yellow-100 hover:p-2 hover:text-blue-800 hover:rounded-lg"
            to="/auth/login"
          >
            {user ? (
              <>
                <Link
                  onClick={handleSignOut}
                  className="btn mt-2 bg-red-500 text-base-200"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <Link to="/auth/login">Login</Link>
            )}
          </Link>
        </div>
      </div>

      <div className="dropdown dropdown-end z-10">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={
                user?.photoURL ||
                "https://img.freepik.com/free-vector/young-prince-vector-illustration_1308-174367.jpg?t=st=1732011460~exp=1732015060~hmac=a498867cf73c8952cc19e69eb1fcc90702a72896a4026e7a0ea44e9d76b3de21&w=740"
              }
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <Link to="/auth/campaign">Donation Campaigns</Link>
          </li>
          <li>
            <Link to="/auth/dashboard">Dashboard</Link>
          </li>
          <li>
            {user ? (
              <>
                <Link
                  onClick={handleSignOut}
                  className="btn mt-2 bg-red-500 text-base-200"
                >
                  Sign Out
                </Link>
              </>
            ) : (
              <Link to="/auth/login">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
