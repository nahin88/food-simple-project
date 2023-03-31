import React from 'react';
import './Food.css';

const Food = (props) => {
    const { strMealThumb, strMeal, idMeal } = props.food;
    console.log(props);
    const addHandelCart = props.addHandelCart;

    return (
        <div className='food'>
            <h1>name: {strMeal}</h1>
            <img src={strMealThumb} alt="" />
            <p><small>{ idMeal}</small></p>
            {/* <p style={{ margin: '5px' }}>{strInstructions}</p> */}
            <button onClick={()=>addHandelCart(props.food)} className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Food;