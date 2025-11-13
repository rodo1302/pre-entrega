import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

export const ItemListContainer = ({ titulo }) => {
  const [productos, setProductos] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    fetch("/data/productos.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error en la respuesta de la red");
        }
        return res.json();
      })
      .then((data) => {
        if (category) {
          setProductos(
            data.filter(
              (producto) =>
                producto.category.toLowerCase() === category.toLowerCase()
            )
          );
        } else {
          setProductos(data);
        }
      })
      .catch((error) => console.error("Error al cargar los productos:", error));
  }, [category]);

  return (
    <section className="item-list-container">
      <h2 className="titulo">{titulo}</h2>
      <ItemList lista={productos} />
    </section>
  );
};
