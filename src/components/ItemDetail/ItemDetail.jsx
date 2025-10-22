import { Item } from "../Item/Item";
import { useCartContext } from "../context/CartContext/useCartContext";
import { Count } from "../Count/Count";
import { useState, useEffect } from "react";

import "./ItemDetail.css";

export const ItemDetail = ({ producto, buttonsOnly = false }) => {
  const { addItem, getItemQuantity } = useCartContext();

  const cantidadInicial = getItemQuantity(producto.id);
  const [cantidad, setCantidad] = useState(cantidadInicial);

  useEffect(() => {
    setCantidad(getItemQuantity(producto.id));
  }, [getItemQuantity, producto.id]);

  const handleAdd = (count) => {
    addItem(producto, count);
    setCantidad(count); // actualizo cantidad mostrada
  };

  // Si solo se quieren ver los botones, renderizamos únicamente el componente Count
  if (buttonsOnly) {
    return (
      <div className="item-detail-buttons">
        <Count
          btnText={"refresh"}
          onConfirm={handleAdd}
          stock={producto.stock}
          initial={cantidad}
        />
      </div>
    );
  }
  return (
    <Item {...producto} showDescription={true}>
      <Count
        btnText={"Agregar al carrito"}
        onConfirm={handleAdd}
        stock={producto.stock}
        initial={cantidad}
      />
    </Item>
  );
};
