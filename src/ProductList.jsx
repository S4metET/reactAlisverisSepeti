import React from "react";

function ProductList({ products, addToCart }) {
  return (
    <div>
      <h2>Ürünler</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Sepete Ekle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
