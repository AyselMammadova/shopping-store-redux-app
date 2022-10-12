import axios from 'axios';

const initialState = {
    allProducts: [],
    hasMore: true,
    loading: true
}

const selectedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GetAllProductList': {
            let setHasMore;

            if(action.payload !== undefined) {
                setHasMore = action.payload.length !== 0 ? true : false;
            } else {
                setHasMore = false;
            }

            return {
                ...state,
                hasMore: setHasMore,
                allProducts: state.hasMore !== true ? state.allProducts : state.allProducts.concat(action.payload)
            }
        }

        default:
            return state
    }
}

export default selectedReducer;


// Thunk function
export const GetAllProductList = () => {
    return async function getAllProductsForCardsThunk(dispatch) {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products`);
        if(response) {
            dispatch({type: 'GetAllProductList', payload: response.data})
        }
    }
}