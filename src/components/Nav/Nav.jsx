import { Link } from "react-router-dom";
import "./Nav.css";
import { useCartContext } from "../context/CartContext/useCartContext";
import car from "../../assets/cart.svg";

export const Nav = () => {
  const { getTotalItems } = useCartContext();
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-item-cart">
          <Link to="/carrito">
            <img className="cart-icon" src={car} alt="Carrito" />
          </Link>
          {getTotalItems() > 0 && (
            <span className="cart-count">{getTotalItems()}</span>
          )}
        </li>
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/about">ACERCA DE</Link>
        </li>
        <li>
          <Link to="/contact">CONTACTO</Link>
        </li>
      </ul>
    </nav>
  );
};
