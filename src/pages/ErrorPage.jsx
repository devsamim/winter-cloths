import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-11/12 mx-auto text-center mt-10 border bg-red-600 p-4 text-white">
      <h1>Silent is Golden!</h1>
      <h3>404 Not Found Page E Apni Esechen! </h3>
      <div className="text-center mt-4">
        <NavLink to="/">
          <button className="btn btn-success">Home Page</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
