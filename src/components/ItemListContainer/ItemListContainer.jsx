import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la respuesta de la red");
        }
        return res.json();
      })
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, []);

  return (
    <section className="item-list-container">
      <h2 className="titulo">{titulo}</h2>
      <ItemList lista={productos} />
    </section>
  );
};
