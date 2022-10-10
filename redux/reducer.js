import { combineReducers } from "redux";
import ProductListReducer from "./features/productSlice";

const rootReducer = combineReducers({
    products: ProductListReducer
})

export default rootReducer;