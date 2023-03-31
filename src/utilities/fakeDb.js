const getLocalStorage = () => {
    let foodCart = {}
    const storedCart = localStorage.getItem('food-cart');
    if (storedCart) {
        foodCart = JSON.parse(storedCart);
    }
    return foodCart;
}

const addToDb = (id) => {
    let foodCart = getLocalStorage();
    const quantity = foodCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        foodCart[id] = newQuantity;
    } else {
        foodCart[id] = 1;
    }
    localStorage.setItem('food-cart', JSON.stringify(foodCart));
}

export { getLocalStorage, addToDb };