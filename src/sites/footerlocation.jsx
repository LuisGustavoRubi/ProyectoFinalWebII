import React from "react";

const FooterLocation = () => {
  const locations = [
    {
      name: "Tegucigalpa - Zona 1",
      address:
        "Calle Principal #105, a 2 cuadras del parque central, frente a Farmacia Simán, número de teléfono: 2222-2222",
    },
    {
      name: "Tegucigalpa - Zona 2",
      address:
        "Avenida Las Palmas, Edificio 3, local 12, 1 cuadra después del Mall Premier, número de teléfono: 3382-4321",
    },
    {
      name: "Tegucigalpa - Zona 3",
      address:
        "Barrio La Ronda, Calle 8, casa #24, contiguo a la panadería El Artesano, número de teléfono: 4855-1222",
    },
    {
      name: "Tegucigalpa - Zona 4",
      address:
        "Colonia Kennedy, Bloque A, calle #7, 3 cuadras abajo del Hospital Escuela, número de teléfono: 6530-1234",
    },
    {
      name: "Tegucigalpa - Zona 5",
      address:
        "Calle del Comercio #89, entre calle Bolívar y Avenida Reforma, frente al banco Ficohsa, número de teléfono: 2222-7299",
    },
  ];

  return (
    <footer className="bg-[var(--secondary-color)] text-[var(--text-primary)] p-6 mt-10">
      <h2 className="text-xl font-semibold mb-4 text-center">Nuestras Tiendas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="bg-[var(--background-color)] p-4 rounded-lg shadow-md hover:bg-[var(--secondary-color-hover)] transition-colors duration-300"
          >
            <p className="font-bold text-[var(--text-primary)]">{loc.name}</p>
            <p className="text-[var(--text-secondary)]">{loc.address}</p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default FooterLocation;


