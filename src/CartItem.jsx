import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
const cart = useSelector(state => state.cart.items);
const CartItem = ({ cartItems, onContinueShopping, onUpdateQuantity, onRemoveItem }) => {
  const dispatch = useDispatch();




    // Calculate total cost
    const totalCost = cartItems.reduce((total, item) => {
        const costNumber = parseFloat(item.cost.substring(1));
        return total + (item.quantity * costNumber);
    }, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                    <div>{item.name}</div>
                    <div>Quantity: {item.quantity}</div>
                    <div>Subtotal: ${(item.quantity * parseFloat(item.cost.substring(1))).toFixed(2)}</div>
                    <button onClick={() => onUpdateQuantity(item, item.quantity + 1)}>+</button>
                    <button onClick={() => onUpdateQuantity(item, item.quantity - 1)}>-</button>
                    <button onClick={() => onRemoveItem(item)}>Remove</button>
                </div>
            ))}
            <div>Total: ${totalCost.toFixed(2)}</div>
            <button onClick={onContinueShopping}>Continue Shopping</button>
        </div>
    );
}

 
// Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
  const itemCost = parseFloat(item.cost.substring(1)); // Convert cost string to number
  totalCost += item.quantity * itemCost;
});

console.log(`Total Cost: $${totalCost.toFixed(2)}`);
  };

  const handleContinueShopping = (e) => {
   
  };
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };


  const handleIncrement = (item) => { 1
  };

  const handleDecrement = (item) => { -1
   
  };

  const handleRemove = (item) => { removeItem
  };

  // Calculate total cost based on quantity for an item
  cart.forEach((item) => {
  const quantity = item.quantity;
  const cost = parseFloat(item.cost.substring(1)); // Convert cost string to a number

  console.log(`Item: ${item.name}, Quantity: ${quantity}, Cost: $${cost.toFixed(2)}`);
});

function calculateTotalCost(item) {
    // Extract the quantity and cost from the item
    const quantity = item.quantity;
    const costString = item.cost;

    // Convert the cost string to a number
    const costNumber = parseFloat(costString.substring(1));

    // Calculate the total cost for the item
    const totalCost = quantity * costNumber;

    return totalCost;
}

// Example usage
const item = {
    quantity: 3,
    cost: "$10.00"
};
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount(Item)}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>

export default CartItem;


