
import  React from "react";
const Reseñas = () => {
  const reseñas = [
    {
      autor: "Carlos M.",
      comentario: "¡Increíble juego! Una de las mejores experiencias de aventura que he tenido. La página es muy fácil de navegar y la atención al cliente fue excelente.",
      estrellas: 5,
    },
    {
      autor: "Ana L.",
      comentario: "¡Divertido y competitivo! Perfecto para jugar con amigos. Además, la página tiene una interfaz limpia y eficiente.",
      estrellas: 4,
    },
    {
      autor: "David G.",
      comentario: "Me encantó. Las mecánicas de supervivencia son geniales y los gráficos impresionantes. La atención al cliente siempre estuvo disponible para ayudarme.",
      estrellas: 5,
    },
    {
      autor: "Lucía P.",
      comentario: "Un RPG con una historia fascinante y muchas horas de juego. La experiencia en el sitio web fue muy positiva, con un proceso de compra rápido y sencillo.",
      estrellas: 4,
    },
    {
      autor: "Julio R.",
      comentario: "¡Supervivencia en su máxima expresión! Totalmente adictivo. La página web es bastante útil y la información de cada juego es clara.",
      estrellas: 5,
    },
    {
      autor: "Clara T.",
      comentario: "La jugabilidad es fluida y los gráficos te sumergen completamente en el espacio. Muy satisfecho con la atención al cliente y el proceso de compra.",
      estrellas: 5,
    },
    {
      autor: "Pedro S.",
      comentario: "Excelente sitio web, fácil de usar, y la compra de juegos es súper rápida. ¡Definitivamente lo recomendaré a mis amigos!",
      estrellas: 5,
    },
    {
      autor: "Sofía P.",
      comentario: "El sitio tiene una gran variedad de juegos y siempre encuentro lo que busco. La atención fue rápida y eficiente, ¡me siento muy satisfecha!",
      estrellas: 4,
    },
  ];

 
  const estrellasUI = (calificacion) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < calificacion ? "text-yellow-400" : "text-gray-400"}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-[var(--background-color)] text-[var(--text-primary)] p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Reseñas de Usuarios</h1>

    
      <div className="space-y-6">
        {reseñas.map((reseña, index) => (
          <div
            key={index}
            className="bg-[var(--secondary-color)] p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-2">
              {estrellasUI(reseña.estrellas)}
            </div>
            <p className="text-[var(--text-secondary)] mt-2">{reseña.comentario}</p>
            <p className="text-right font-medium text-[var(--text-primary)] mt-4">
              - {reseña.autor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reseñas;
