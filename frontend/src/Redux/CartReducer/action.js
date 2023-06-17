import * as types from "./actionTypes"


export const getallProducts = (payload) => ({
    type:types.ALL_PRODUCTS,
    payload
});

        //* add to cart
// export const addToCart = (data) => ({
//     type: CART_PRODUCTS,
//     payload: data
// });

        //* increase quantity
export const updateCartPrice = () => ({
    type:types.UPDATE_CART_PRICE

});

 


        //* remove item from cart
export const removeDataFromCart = () => ({
    type: types.REMOVE_DATA_FROM_CART,
    
});



        //* remove All item from cart
export const deleteAllFromCart = () => ({
    type: types.REMOVE_ALL_FROM_CART,
});
