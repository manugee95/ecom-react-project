import { useContext } from "react";
import EcomContext from "../../context/EcomContext";

function Checkout() {
  const { cartItems, totalAmount } = useContext(EcomContext);

  return (
    <div className="flex mx-[10%] my-[5%]">
      <div className="w-[50%]">
      <h1 className="text-center mb-[10px] text-2xl font-bold">Order Summary</h1>
        <table className="w-[90%] mx-auto">
          <thead>
            <th>Name</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </thead>
          <tbody className="text-center">
            {cartItems.map((item) => (
              <tr className="border-b-2">
                <td>{item.name}</td>
                <td className="flex justify-center">
                  <img src={item.img} alt="" className="h-[50px]" />
                </td>
                <td>₦{item.price}</td>
                <td>{item.quantity}</td>
                <td>₦{item.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-[3%]">
          <div>
            <p className="text-xl font-bold">Total Amount = ₦{totalAmount()}</p>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <h1 className="text-center mb-[10px] text-2xl font-bold">Delivery Information</h1>
        <form action="">
            <div className="mb-3">
                <input type="text" className="outline outline-1 w-full p-[10px]" placeholder="First Name" />
            </div>
            <div className="mb-3">
                <input type="text" className="outline outline-1 w-full p-[10px]" placeholder="Last Name" />
            </div>
            <div className="mb-3">
                <input type="text" className="outline outline-1 w-full p-[10px]" placeholder="Phone" />
            </div>
            <div className="mb-3">
                <textarea name="" id="" className="outline outline-1 w-full p-[10px]" placeholder="Delivery Address"></textarea>
            </div>
            <div>
                <button className="bg-blue-950 p-[10px] text-white rounded-lg">Pay Now</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
