import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./cart";
import { products } from "./data";

function App() {
  const [cart, setCart] = useState([]);

  const updateCart = (product, quantityChange) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        const updatedCart = prevCart.map(item =>
        item.id === product.id
        ? { ...item, quantity: item.quantity + quantityChange }
        : item
      );

        return updatedCart.filter(item => item.quantity > 0);
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <h1>Alışveriş Sepeti</h1>
      <ProductList products={products} addToCart={product => updateCart(product, 1)} />
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
}

export default App;