import "./Item.css";

export const Item = ({ name, price, description, imageUrl, children }) => {
  return (
    <article className="product-item">
      <img src={imageUrl} alt={description} />
      <h2 className="product-title">{name}</h2>
      <h3>Precio: ${price}.-</h3>
      <p>
        <strong>Descripcion:</strong> {description}
      </p>
      {children}
    </article>
  );
};
