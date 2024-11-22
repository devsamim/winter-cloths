import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Campaigns = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/allData.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 w-10/12 mx-auto gap-6 p-6">
      {product.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
};

export default Campaigns;
