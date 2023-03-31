import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const foods = props.cart;
  let quantity = 0;
  console.log(foods);
  for (const food of foods) {
    if (quantity || quantity == 0) {
      // console.log(quantity, food.quantity);
      quantity = food.quantity + quantity;
    }
  }

  return (
    <div>
      <h4>order summery</h4>
      <h5>total addedFood:{quantity} </h5>
      {foods.map((food) => <h3>{food.strMeal}</h3>)}
    </div>
  );
};

export default Cart;
