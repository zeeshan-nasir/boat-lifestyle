export const ADD_TO_CART = "ADD_TO_CART";

export const addToCart = (data) => {
   return {
      type: ADD_TO_CART,
      payload: data,
   };
};
