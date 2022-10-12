import { combineReducers } from "redux";
import ProductListReducer from "./features/productSlice";
import cartReducer from "./features/cartSlice";
import selectedReducer from "./features/selectedSlice";

const rootReducer = combineReducers({
    products: ProductListReducer,
    selected: selectedReducer,
    cart: cartReducer
})

export default rootReducer;