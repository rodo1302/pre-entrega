import { Item } from "../Item/Item";
import { useCartContext } from "../context/CartContext/useCartContext";

export const ItemDetail = ({ producto }) => {
  const { addItem } = useCartContext();
  return (
    <Item {...producto}>
      <button onClick={() => addItem(producto)}>Enviar al carrito</button>
    </Item>
  );
};
