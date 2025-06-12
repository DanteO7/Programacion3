import { ProductCard } from "../ProductCard/ProductCard";
import "./ProductList.css";

export const ProductList = ({ productos }) => {
  return (
    <div className="card-container">
      {productos.map((producto) => {
        return <ProductCard key={producto.id} producto={producto} />;
      })}
    </div>
  );
};
