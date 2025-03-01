import React from "react";

function Cart({ cart, updateCart }) {
  const total = cart.reduce((facture, item) => facture + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Sepet</h2>
      {cart.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
              <button onClick={() => updateCart(item, -1)}>-</button>
              <button onClick={() => updateCart(item, 1)}>+</button>
              <button onClick={() => updateCart(item, -item.quantity)}>Sil</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Toplam: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;