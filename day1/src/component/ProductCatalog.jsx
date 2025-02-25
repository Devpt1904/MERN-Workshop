// import React from "react";

import ProductCard from "./ProductCard";

const ProductCatalog = () => {
//   const numbers = [1, 2, 4, 5];
  //   const product = {
  //     name: "prodct 1",
  //     price: 100,
  //   };

  // why do we need array of an object
  const products = [
    {
      id: 1,
      name: "product 1",
      price: 100,
      img: "/ac1.jpeg",
      desc: "Product 1 Description",
    }, //position is 0
    {
      id: 2,
      name: "product 2",
      price: 200,
      img: "/ac2.jpeg",
      desc: "Product 2 Description",
    },
    {
      id: 3,
      name: "product 3",
      price: 300,
      img: "/ac3.jpeg",
      desc: "Product 3 Description",
    }, //position is 1
  ];

  return (
    <section className="grid grid-cols-3 gap-4 mt-10 px-20 h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-8">Product Catalog</h2>
        <div className="flex space-x-4 justify-between w-full">
          {products.map((product, index) => (
            <div key={index}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
