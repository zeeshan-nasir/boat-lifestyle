import { ADD_TO_CART } from "./actions";

const init = {
   data: [],
};

export const cartReducer = (store = init, action) => {
   switch (action.type) {
      case ADD_TO_CART:
         return { ...store, data: [...store.data, action.payload] };
      default:
         return store;
   }
};
