import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";

export const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`/data/productos.json`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }
        return res.json();
      })
      .then((data) => {
        const productoEncontrado = data.find(
          (prod) => prod.id === parseInt(id)
        );
        if (productoEncontrado) {
          setProducto(productoEncontrado);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <section className="item-detail-container">
      {Object.keys(producto).length ? (
        <ItemDetail producto={producto} />
      ) : (
        <p>
          <strong>Cargando...</strong>
        </p>
      )}
    </section>
  );
};
