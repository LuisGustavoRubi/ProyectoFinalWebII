import React, { useState, useEffect } from "react";
import { galeriaJSON } from "../../data/galeriaJSON";

const Galery = () => {
  const [imagenes, setImagenes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0); 

  useEffect(() => {
    const imagenesData = galeriaJSON();
    console.log(imagenesData); 
    setImagenes(imagenesData);
  }, []);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagenes.length) % imagenes.length
    );
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-primary)] p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Galería de Imágenes</h1>

      {/* Carrusel */}
      <div className="relative max-w-full mx-auto">
        {/* Imagen actual */}
        <div className="flex justify-center items-center">
          <img
            src={imagenes[currentIndex]?.image}
            alt={imagenes[currentIndex]?.title}
            className="object-contain max-w-full max-h-[70vh] rounded-lg"
          />
        </div>
        
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          onClick={prevImage}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          onClick={nextImage}
        >
          &#10095;
        </button>
      </div>

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold">{imagenes[currentIndex]?.title}</h2>
        <p className="text-gray-700">{imagenes[currentIndex]?.description}</p>
      </div>
    </div>
  );
};

export default Galery;
