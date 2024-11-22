import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { title, description, image, division, id } = product;
  return (
    <div className="w-11/12 mx-auto">
      <div className="card card-compact bg-base-100 items-center p-4  shadow-xl">
        <div>
          <img
            className="flex justify-center items-center rounded-lg w-[350px] h-[250px]"
            src={image}
            alt="Shoes"
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{title}</h2>
          <p className="">{description}</p>
          <p className="bg-yellow-200 p-2 lg:w-24 text-blue-900 rounded-full text-center font-bold btn btn-sm">
            {division}
          </p>
          <div className="card-actions justify-end">
            <Link to={`/campaigns/${id}`}>
              <button className="btn btn-neutral">Donate Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
