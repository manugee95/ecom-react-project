import { createContext, useState, useEffect } from "react";
import useAlert from "../hooks/useAlert";

const EcomContext = createContext();

export const EcomProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { alertInfo, showAndHide } = useAlert();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const res = await fetch("http://localhost:3000/starTech");
    const data = await res.json();
    setProduct(data);
  };

  const featured = product.filter((item) => item.featured === true);
  const topSelling = product.filter((item) => item.topSelling === true);

  const addToCart = (prod) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === prod.id
    );

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      const itemToUpdate = updatedCart[existingItemIndex];
      itemToUpdate.quantity += prod.quantity;
      itemToUpdate.amount = itemToUpdate.price * itemToUpdate.quantity;
      showAndHide("error", "Item already exist");
    } else {
      setCartItems([
        ...cartItems,
        { ...prod, amount: prod.price * prod.quantity },
      ]);
      showAndHide("success", "item added to cart");
    }
  };

  const updateQuantity = (id, newQuantity)=>{
    const existingItemIndex = cartItems.findIndex((item)=> item.id === id)
    const updatedCart = [...cartItems]
    const itemToUpdate = updatedCart[existingItemIndex]
    itemToUpdate.quantity = newQuantity
    itemToUpdate.amount = itemToUpdate.price * itemToUpdate.quantity
    setCartItems(updatedCart)
  }

  const removeItem = (id)=>{
    const updatedCart = cartItems.filter((item)=> item.id !== id)
    setCartItems(updatedCart)
    showAndHide("success", "Item deleted from cart")
  }

  const totalAmount = ()=>{
    return cartItems.reduce((acc, cur)=> acc + cur.amount, 0)
  }

  return (
    <EcomContext.Provider
      value={{
        product,
        featured,
        topSelling,
        addToCart,
        showAndHide,
        alertInfo,
        cartItems,
        updateQuantity,
        removeItem,
        totalAmount
      }}
    >
      {children}
    </EcomContext.Provider>
  );
};

export default EcomContext;
