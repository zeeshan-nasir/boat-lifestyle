import { legacy_createStore as createStore } from "redux";
import { cartReducer } from "./AddToCart/cartReducer";

export const store = createStore(cartReducer);
