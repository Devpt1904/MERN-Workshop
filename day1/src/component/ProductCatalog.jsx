import ProductCard from "./ProductCard";

const ProductCatalog = () => {
  const products = [
    { id: 1, name: "product 1", price: 100, img: "/ac1.jpeg", desc: "Product 1 Description" },
    { id: 2, name: "product 2", price: 200, img: "/ac2.jpeg", desc: "Product 2 Description" },
    { id: 3, name: "product 3", price: 300, img: "/ac3.jpeg", desc: "Product 3 Description" },
    { id: 4, name: "product 4", price: 400, img: "/ac4.jpeg", desc: "Product 4 Description" },
    { id: 5, name: "product 5", price: 500, img: "/ac5.jpeg", desc: "Product 5 Description" },
    { id: 6, name: "product 6", price: 600, img: "/ac6.jpeg", desc: "Product 6 Description" },

  ];

  return (
    <section className="mt-10 px-20 h-screen">
      <h2 className="text-2xl pl-17 mb-2 font-bold  text-[#FF406E]">Product Catalog</h2>
      <div className="w-[150px] h-1 ml-18 mb-8 bg-[#74031d]"></div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
