import { useCartContext } from "../context/CartContext/useCartContext";
import "./Cart.css";
export const Cart = () => {
  const { cart, clearCart } = useCartContext();

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
          <button className="cart-btn" onClick={() => clearCart()}>
            <strong>Vaciar carrito</strong>
          </button>
        </ul>
      )}
    </div>
  );
};
