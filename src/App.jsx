import "./App.css";
import { Header } from "./components/Header/Header.jsx";
import { Route, Routes } from "react-router-dom";
import { Form } from "./components/Form/Form.jsx";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Cart } from "./components/Cart/Cart.jsx";
import { About } from "./components/About/About.jsx";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer titulo={"Mi Tienda - Insumos de Librería"} />
            }
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Form />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
