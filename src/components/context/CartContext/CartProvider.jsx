import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const exists = (id) => {
    return cart.some((item) => item.id === id);
  };

  const addItem = (item, count) => {
    if (exists(item.id)) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: count } : prod
        )
      );
      if (cart.find((prod) => prod.id === item.id).quantity !== count) {
        alert("Cantidad actualizada en el carrito");
        return;
      }
    } else {
      setCart([...cart, { ...item, quantity: count }]);
      alert("Producto agregado al carrito");
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalItems = () => {
    return cart.reduce((acc, prod) => acc + prod.quantity, 0);
  };

  const getItemQuantity = (id) => {
    const item = cart.find((prod) => prod.id === id);
    return item ? item.quantity : 0;
  };

  const checkout = () => {
    const ok = confirm("¿Desea finalizar la compra?");
    if (ok) {
      clearCart();
      alert("Gracias por su compra");
    }
  };

  const values = {
    cart,
    addItem,
    removeItem,
    clearCart,
    getTotalItems,
    getItemQuantity,
    checkout,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
