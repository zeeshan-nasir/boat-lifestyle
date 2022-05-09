import {
   applyMiddleware,
   combineReducers,
   legacy_createStore as createStore,
} from "redux";
import { cartReducer } from "./AddToCart/cartReducer";
import { productsReducer } from "./Products/reducer";

const rootReducer = combineReducers({
   cart: cartReducer,
   products: productsReducer,
});

const loggerMiddleware = (store) => (next) => (action) => {
   next(action);
};

export const store = createStore(
   rootReducer,
   applyMiddleware(loggerMiddleware)
);

// store.subscribe(() => {
// console.log(store.getState())
// })
