import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (item) => {
    if (exists(item.id)) {
      alert("El producto ya está en el carrito");
    } else {
      setCart([...cart, item]);
      alert("Producto agregado al carrito");
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  const getTotalItems = () => {
    if (cart.length) return cart.length;
  };
  const values = { cart, addItem, clearCart, getTotalItems };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
