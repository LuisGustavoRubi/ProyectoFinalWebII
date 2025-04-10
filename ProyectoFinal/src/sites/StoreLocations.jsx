// src/sites/StoreLocations.jsx

import React from 'react';

const StoreLocations = () => {
  const locations = [
    { name: "Tegucigalpa - Zona 1", address: "Calle Principal, Tegucigalpa" },
    { name: "Tegucigalpa - Zona 2", address: "Avenida Las Palmas, Tegucigalpa" },
    { name: "Tegucigalpa - Zona 3", address: "Barrio La Ronda, Tegucigalpa" },
    { name: "Tegucigalpa - Zona 4", address: "Colonia Kennedy, Tegucigalpa" },
    { name: "Tegucigalpa - Zona 5", address: "Calle del Comercio, Tegucigalpa" },
  ];

  // Obtener una ubicación aleatoria
  const getRandomLocation = () => {
    return locations[Math.floor(Math.random() * locations.length)];
  };

  const randomLocation = getRandomLocation();

  return (
    <div className="bg-background-color text-white min-h-screen p-6"> 
      <h1 className="text-4xl font-semibold text-center text-primary-color">Ubicaciones de Tiendas</h1>
      <div className="mt-6">
        <h2 className="text-2xl text-center text-secondary-color">Ubicación Aleatoria</h2>
        <div className="mt-4 bg-secondary-color text-white p-4 rounded-lg">
          <p className="font-bold">{randomLocation.name}</p>
          <p>{randomLocation.address}</p>
        </div>
      </div>
    </div>
  );
};

export default StoreLocations;
