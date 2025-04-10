import { useParams } from "react-router-dom";
import { productosJSON } from "../../data/productos";


export const ProductoDetalle = () => {
  const { id } = useParams();
  const producto = productosJSON().find((prod) => prod.id === parseInt(id));

  if (!producto) {
    return <p className="text-center mt-10">Producto no encontrado</p>;
  }

  return (
    <div className="detalleProducto bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto mt-10">
      <h3 className="text-2xl font-bold mb-2">{producto.name}</h3>
      <img
        src={producto.image}
        alt={producto.name}
        className="mx-auto mb-4 rounded-md"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <p className="text-gray-700 text-lg mb-2">{producto.description}</p>
      <p className="text-green-600 font-bold text-xl">${producto.price}</p>
    </div>
  );
};
