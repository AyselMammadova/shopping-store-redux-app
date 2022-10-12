import axios from 'axios';

const initialState = {
    productCollection: [],
    hasMore: true,
    loading: true
}

const ProductListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GetProductList': {
            let setHasMore;

            if(action.payload !== undefined) {
                setHasMore = action.payload.length !== 0 ? true : false;
            } else {
                setHasMore = false;
            }

            return {
                ...state,
                hasMore: setHasMore,
                productCollection: state.hasMore !== true ? state.productCollection : state.productCollection.concat(action.payload)
            }
        }

        default:
            return state
    }
}

export default ProductListReducer;


// Thunk function
export const GetProductList = (page) => {
    return async function getProductsForCardsThunk(dispatch) {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=${page}&limit=8`);
        if(response) {
            dispatch({type: 'GetProductList', payload: response.data})
        }
    }
}