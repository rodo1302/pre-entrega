import { Nav } from "../Nav/Nav.jsx";
import logo from "../../assets/logo-tienda.svg";
import { Link } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header-logo" src={logo} alt="logo tienda" />
      </Link>
      <Nav />
    </header>
  );
};
