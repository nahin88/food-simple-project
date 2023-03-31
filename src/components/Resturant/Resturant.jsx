import React, { useEffect, useState } from "react";
import { addToDb, getLocalStorage } from "../../utilities/fakeDb";
import Cart from "../Cart/Cart";
import Food from "../Food/Food";
import "./Resturant.css";

const Resturant = () => {
  const [foods, setFoods] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setFoods(data.meals));
  }, []);

  useEffect(() => {
    // step 1: get id
    const storedcart = getLocalStorage();
    const savedCart = [];
    //step 2: get food by using id
    for (const id in storedcart) {
      const addFood = foods.find((food) => food.idMeal === id);
      console.log(id, addFood);
      //step 3: add quantity
      if (addFood) {
        const quantity = storedcart[id];
        addFood.quantity = quantity;
        savedCart.push(addFood);
      }
      //step 4: push to savedcart
    }
    //step 5:
    setCart(savedCart);
  }, [foods]);

    const addHandelCart = (food) => {
      console.log(food);
      const newCart = [...cart, food];
      // console.log(newCart);
    setCart(newCart);
    // console.log(foods);
    addToDb(food.idMeal);
  };
  return (
    <div className="resturant">
      <div className="resturant-container">
        {foods && foods.map((food) => (
          <Food
            food={food}
            key={food.idMeal}
            addHandelCart={addHandelCart}
          ></Food>
        ))}
      </div>
      <div className="sideber-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Resturant;
