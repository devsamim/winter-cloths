// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import ProductCard from "./ProductCard";

// const ProductDetails = () => {
//   const [product, setProduct] = useState();
//   useEffect(() => {
//     fetch("/allData.json")
//       .then((res) => res.json())
//       .then((data) => setProduct(data));
//   }, []);
//   const { id } = useParams();
//   return (
//     <div>
//       {product.map((singleProduct) => (
//         <ProductCard
//           key={singleProduct.id}
//           singleProduct={singleProduct}
//         ></ProductCard>
//       ))}
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/allData.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      {product
        .filter((singleProduct) => singleProduct.id === parseInt(id)) // Filter to match the ID
        .map((singleProduct) => (
          <ProductCard key={singleProduct.id} singleProduct={singleProduct} />
        ))}
    </div>
  );
};

export default ProductDetails;
