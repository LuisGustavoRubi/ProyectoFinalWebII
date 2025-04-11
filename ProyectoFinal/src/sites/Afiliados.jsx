import React, { useState, useEffect } from "react";
import { galeriaJSON } from "../../data/afiliadosJSON.js";

const Afiliados = () => {
  const [imagenes, setImagenes] = useState([]);

  useEffect(() => {
    const imagenesData = galeriaJSON();
    console.log(imagenesData);
    setImagenes(imagenesData);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-primary)] p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Partners Comerciales</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {imagenes.map((imagen) => (
          <div
            key={imagen.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center"
          >
            <img
              src={imagen.image}
              alt={imagen.title}
              className="w-[400px] h-[400px] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Afiliados;
