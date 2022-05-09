export const ADD_TO_CART = "ADD_TO_CART";
export const DEL_FROM_CART = "DEL_FROM_CART";

export const addToCart = (data) => {
   return {
      type: ADD_TO_CART,
      payload: data,
   };
};

export const delFromCart = (data) => {
   return {
      type: DEL_FROM_CART,
      payload: data,
   };
};
