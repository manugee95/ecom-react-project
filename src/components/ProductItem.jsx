import { Link } from "react-router-dom";
import { useContext } from "react";
import EcomContext from "../context/EcomContext";

function ProductItem({ item }) {
  const {addToCart} = useContext(EcomContext)

  return (
    <div className="mb-5 border-2 border-black w-max rounded-lg shadow-lg shadow-blue-500">
      <Link to={`/detail/${item.id}`}>
        <img
          src={"http://localhost:3000/" + item.img}
          alt=""
          className="h-[200px] w-[250px] rounded-lg object-cover"
        />
      </Link>
      <div className="text-center my-5">
        <p className="text-2xl">{item.name}</p>
        <p className="py-3 text-xl">₦{item.price}</p>
        <button onClick={()=> addToCart({...item, quantity: 1})} className="bg-blue-950 text-white rounded p-[10px]">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
