// src/pages/Testimonios.jsx
import React from "react";

const testimonios = [
  {
    game: "The Last Adventure",
    comentario: "¡Increíble juego! Una de las mejores experiencias de aventura que he tenido.",
    autor: "Carlos M.",
    estrellas: 5,
    recomendado: true,  
  },
  {
    game: "Rocket League Racing",
    comentario: "¡Divertido y competitivo! Perfecto para jugar con amigos.",
    autor: "Ana L.",
    estrellas: 4,
    recomendado: true,
  },
  {
    game: "Zombie Apocalypse",
    comentario: "Me encantó. Las mecánicas de supervivencia son geniales y los gráficos impresionantes.",
    autor: "David G.",
    estrellas: 5,
    recomendado: true,
  },
  {
    game: "Fantasy Quest",
    comentario: "Un RPG con una historia fascinante y muchas horas de juego.",
    autor: "Lucía P.",
    estrellas: 4,
    recomendado: true,
  },
  {
    game: "Survival Island",
    comentario: "¡Supervivencia en su máxima expresión! Totalmente adictivo.",
    autor: "Julio R.",
    estrellas: 5,
    recomendado: true,
  },
  {
    game: "Space Wars",
    comentario: "La jugabilidad es fluida y los gráficos te sumergen completamente en el espacio.",
    autor: "Clara T.",
    estrellas: 4,
    recomendado: false,  
  },
];

const estrellas = (calificacion) => {
  return [...Array(5)].map((_, index) => (
    <span key={index} className={index < calificacion ? "text-yellow-400" : "text-gray-400"}>★</span>
  ));
};

const Testimonios = () => {
  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-primary)] p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Testimonios de Nuestros Juegos</h1>
      <div className="space-y-6">
        {testimonios.map((testimonio, index) => (
          <div
            key={index}
            className="bg-[var(--secondary-color)] p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              {testimonio.game}
            </h2>
            <div className="flex items-center space-x-2">
              {estrellas(testimonio.estrellas)} 
            </div>
            <p className="text-[var(--text-secondary)] mt-2">{testimonio.comentario}</p>
            <p className="text-right font-medium text-[var(--text-primary)] mt-4">
              - {testimonio.autor}
            </p>
            <p className={`text-right mt-2 ${testimonio.recomendado ? "text-green-500" : "text-red-500"}`}>
              {testimonio.recomendado ? "Recomendado" : "No Recomendado"}
            </p>
          </div>
        ))}
      </div>

    
      <div className="mt-8 bg-[var(--secondary-color)] p-6 rounded-lg">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">Lo Bueno de Nuestra Página</h3>
        <p className="text-[var(--text-secondary)] mt-4">
          Nuestra página te ofrece una experiencia de compra segura, rápida y sencilla. Con una interfaz intuitiva, fácil navegación, y una variedad de videojuegos en distintas categorías, ¡te garantizamos que encontrarás algo que te encantará! Además, nuestras recomendaciones personalizadas y testimonios de usuarios te ayudarán a elegir el juego perfecto para ti.
        </p>
      </div>
    </div>
  );
};

export default Testimonios;

