import { useCartContext } from "../context/CartContext/useCartContext";
import "./Cart.css";
import remove from "../../assets/eliminar.svg";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart, removeItem } = useCartContext();

  return (
    <section className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <>
          <p>No hay productos en el carrito.</p>
          <Link to="/">
            <button className="cart-btn-home">Volver a la tienda</button>
          </Link>
        </>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <span className="cart-item-name">{item.name}</span>
              <span>${item.price}.-</span>
              <ItemDetail producto={item} buttonsOnly={true} />

              <span>Subtotal: ${item.price * item.quantity}.-</span>
              <button
                className="cart-btn-remove"
                onClick={() => removeItem(item.id)}
              >
                <img className="img-remove" src={remove} alt="Eliminar" />
              </button>
            </li>
          ))}
          <p className="cart-total">
            <strong>
              Total: $
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
              .-
            </strong>
          </p>
          <div className="cart-actions">
            <button className="cart-btn-clear" onClick={() => clearCart()}>
              <strong>Vaciar carrito</strong>
            </button>
            <button className="cart-btn-checkout">
              <strong>Finalizar Compra</strong>
            </button>
          </div>
        </ul>
      )}
    </section>
  );
};
