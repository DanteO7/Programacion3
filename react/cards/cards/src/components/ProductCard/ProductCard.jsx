import "./ProductCard.css";

export const ProductCard = ({ producto }) => {
  return (
    <div className="product-card">
      <img src={producto.img} alt={"imagen del producto " + producto.nombre} />
      <div className="text-card">
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>
        <span>${producto.precio}</span>
      </div>
      <button className="primary-button">Agregar al Carrito</button>
    </div>
  );
};
