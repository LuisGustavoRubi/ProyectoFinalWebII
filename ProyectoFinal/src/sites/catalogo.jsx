import { useEffect, useState } from "react";
import { productosJSON } from "../../data/productos";

export const Catalogo = () => {
const productosPorPagina = 8;
const [productos, setProductos] = useState([]);
const [paginaActual, setPaginaActual] = useState(1);
const [productoSeleccionado, setProductoSeleccionado] = useState(null);

useEffect(() => {
    const productosConId = productosJSON().map((producto, index) => ({
    ...producto,
    id: index + 1,
    name: producto.name,
    image: producto.image,
    price: producto.price,
    category: producto.category || "Videojuego",
    description: producto.description
    }));
    setProductos(productosConId);
}, []);


const indiceInicial = (paginaActual - 1) * productosPorPagina;
const indiceFinal = indiceInicial + productosPorPagina;
const productosPagina = productos.slice(indiceInicial, indiceFinal);
const totalPaginas = Math.ceil(productos.length / productosPorPagina);

const cambiarPagina = (numero) => {
    setProductoSeleccionado(null);
    setPaginaActual(numero);
};

return (
    <div className="catalogoPage px-4 py-6">
    <h2 className="productosTitulo">Catálogo de Videojuegos</h2>

    <section className="productos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {productosPagina.map((producto) => (
        <div
            key={producto.id}
            className={`producto bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:scale-105 transition-transform duration-300 ${
            productoSeleccionado?.id === producto.id ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setProductoSeleccionado(producto)}
        >
            <img src={producto.image} alt={producto.name} className="productoImagen" />
            <h2 className="productoTitulo text-lg font-semibold">{producto.name}</h2>
            <p className="text-gray-700 mb-1">Categoría: {producto.category}</p>
            <p className="text-green-600 font-bold">${producto.price}</p>
        </div>
        ))}
    </section>

    <div className="flex justify-center space-x-2 mb-8">
        {Array.from({ length: totalPaginas }).map((_, index) => (
        <button
            key={index}
            className={`px-3 py-1 rounded-full ${
            paginaActual === index + 1 ? "bg-orange-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => cambiarPagina(index + 1)}
        >
            {index + 1}
        </button>
        ))}
    </div>

    {productoSeleccionado && (
        <div className="detalleProducto bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-2">{productoSeleccionado.name}</h3>
        <img
src={productoSeleccionado.image}
alt={productoSeleccionado.name}
className="mx-auto mb-4 rounded-md"
style={{ maxWidth: "100%", height: "auto" }}
/>
        <p className="text-gray-700 text-lg mb-2">{productoSeleccionado.description}</p>
        <p className="text-green-600 font-bold text-xl">${productoSeleccionado.price}</p>
        </div>
    )}
    </div>
);
};
