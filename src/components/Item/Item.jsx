import "./Item.css";

export const Item = ({
  name,
  price,
  description,
  imageUrl,
  children,
  showDescription,
}) => {
  const articleClass = showDescription ? "" : "product-item-hover";
  return (
    <article className={`product-item ${articleClass}`}>
      <img src={imageUrl} alt={description} />
      <h2 className="product-title">{name}</h2>
      <h3>Precio: ${price}.-</h3>
      {showDescription && (
        <p>
          <strong>Descripcion:</strong> {description}
        </p>
      )}

      {children}
    </article>
  );
};
