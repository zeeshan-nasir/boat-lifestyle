import { GET_PRODUCTS, SORT_PRODUCTS } from "./action";

const initState = {
    products : []
};

export const productsReducer = (state = initState, {type, payload}) => {
    switch(type) {
        case GET_PRODUCTS: 
            return {...state, products: payload};
        case SORT_PRODUCTS :
            return {
                ...state, products: [...state.products].sort((a,b) => a[payload] > b[payload] ? 1 : a[payload] < b[payload] ? -1 : 0)
            }
        default: 
            return state
    }
    
}