import { useEffect, useState } from "react";
import { productosJSON } from "../../data/productos";
import { Link } from "react-router-dom";
import { Button } from "../components/button"

export const Catalogo = () => {
  const productosPorPagina = 8;
  const [productos, setProductos] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);

  useEffect(() => {
    const productosConId = productosJSON().map((producto, index) => ({
      ...producto,
      id: index + 1,
      name: producto.name,
      image: producto.image,
      price: producto.price,
      category: producto.category || "Videojuego",
      description: producto.description,
    }));
    setProductos(productosConId);
  }, []);

  const indiceInicial = (paginaActual - 1) * productosPorPagina;
  const indiceFinal = indiceInicial + productosPorPagina;
  const productosPagina = productos.slice(indiceInicial, indiceFinal);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
  };

  return (
    <div className="catalogoPage px-4 py-6">
      
      <section>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2 mb-8 p-4">
  <li>
    <Button href="/FooterLocation" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
      <img src="/icons/geo-alt.svg" alt="Ubicación" className="w-5 h-5" />
      Estamos Ubicados
    </Button>
  </li>
  <li>
    <Button href="/testimonios" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
      <img src="/icons/book.svg" alt="Testimonios" className="w-5 h-5" />
      Testimonios de Usuarios
    </Button>
  </li>
  <li>
    <Button href="/Reseñas" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
      <img src="/icons/pen.svg" alt="Reseñas" className="w-5 h-5" />
      Reseñas de Usuarios
    </Button>
  </li>
  <li>
    <Button href="/afiliados" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
      <img src="/icons/person-arms-up.svg" alt="Partners Comerciales" className="w-5 h-5" />
      Partners Comerciales
    </Button>
  </li>
  <li>
    <Button href="/galery" className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
      <img src="/icons/card-image.svg" alt="Galería" className="w-5 h-5" />
      Galería
    </Button>
  </li>
</ul>
</section>

    <h2 className="productosTitulo">Catálogo de Videojuegos</h2>
      <section className="productos grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {productosPagina.map((producto) => (
          <Link to={`/catalogo/${producto.id}`} key={producto.id}>
            <div className="producto bg-white rounded-2xl shadow-md p-4 cursor-pointer hover:scale-105 transition-transform duration-300">
              <img
                src={producto.image}
                alt={producto.name}
                className="productoImagen"
              />
              <h2 className="productoTitulo text-lg font-semibold">
                {producto.name}
              </h2>
              <p className="text-gray-700 mb-1">
                Categoría: {producto.category}
              </p>
              <p className="text-green-600 font-bold">${producto.price}</p>
            </div>
          </Link>
        ))}
      </section>

      <div className="flex justify-center space-x-2 mb-8">
        {Array.from({ length: totalPaginas }).map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-full ${
              paginaActual === index + 1
                ? "bg-orange-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
            onClick={() => cambiarPagina(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      
    </div>
  
  );
};

