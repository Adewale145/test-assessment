import { ADD_PRODUCT } from '../actions/productActions';

const initialState = {
  products: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload]
      };
    default:
      return state;
  }
};

export default rootReducer;