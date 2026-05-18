import { memo } from "react";

const ProductCard = memo(({ producto }) => {
  const title = producto.title || producto.nombre || "Producto sin título";
  const price = producto.price ?? producto.precio ?? 0;
  const description = producto.description || producto.descripcion || "Sin descripción";
  const image = producto.image || "https://via.placeholder.com/300x200.png?text=Sin+imagen";

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <p className="product-description">{description.slice(0, 100)}...</p>
    </div>
  );
});

ProductCard.displayName = "ProductCard";

export default ProductCard;