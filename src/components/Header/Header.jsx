import { Nav } from "../Nav/Nav.jsx";
import logo from "../../assets/logo-tienda.svg";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <img className="header-logo" src={logo} alt="logo tienda" />
      <Nav />
    </header>
  );
};
