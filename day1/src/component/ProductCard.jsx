/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  return (
    <div className=" text-black rounded-lg w-[300px] bg-gray-100  shadow-lg h-max flex flex-col justify-center items-center pt-4">
      <img src={product.img} alt="product" className="w-[250px] h-[200px]" />
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-lg">Price: ${product.price}</p>
      <p className="text-lg">Desc: {product.desc}</p>
    </div>
  );
};

export default ProductCard;
