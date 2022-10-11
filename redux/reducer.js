import { combineReducers } from "redux";
import ProductListReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";

const rootReducer = combineReducers({
    products: ProductListReducer,
    cart: cartReducer
})

export default rootReducer;