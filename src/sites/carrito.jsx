import React, { useState } from 'react';
import { productosJSON } from "../../data/productos"; 

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  return (
    <div className="cart-page max-w-7xl mx-auto p-6" style={{ backgroundColor: 'var(--background-color)' }}>
      <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: 'var(--text-primary)' }}>Carrito de Compras juegos  en stack </h2>
      
      <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productosJSON().map((product) => (
          <div key={product.id} className="product shadow-md rounded-lg p-4" style={{ backgroundColor: 'var(--secondary-color)' }}>
            <img src={product.image} alt={product.name} className="product-image w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="product-name text-xl font-medium mb-2" style={{ color: 'var(--text-primary)' }}>{product.name}</h3>
            <p className="product-description text-text-secondary text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>{product.description}</p>
            <p className="product-price text-lg font-semibold" style={{ color: 'var(--text-primary)' }}>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn w-full py-2 rounded-md hover:bg-primary-color-hover transition" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--text-primary)' }}>
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>

      <h3 className="cart-header text-xl font-semibold mt-6 mb-4" style={{ color: 'var(--text-primary)' }}>Productos en el carrito:</h3>
      <ul className="cart-items space-y-4">
        {cart.map((product) => (
          <li key={product.id} className="cart-item flex justify-between items-center p-4 rounded-lg" style={{ backgroundColor: 'var(--secondary-color)' }}>
            <span className="cart-item-name font-medium" style={{ color: 'var(--text-primary)' }}>{product.name} - ${product.price}</span>
            <button onClick={() => removeFromCart(product.id)} className="remove-item-btn" style={{ color: 'var(--primary-color)' }}>
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <div className="cart-total mt-6 text-right">
        <h3 className="total-price text-2xl font-semibold" style={{ color: 'var(--text-primary)' }}>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
};

export default CartPage;

