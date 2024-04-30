import { combineReducers } from '@reduxjs/toolkit';
// import { legacy_createStore as createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer'
import productReducer from './reducers/productReducer';

const rootReducer = combineReducers({
    auth: authReducer, 
    products: productReducer
});

const store = configureStore({
    reducer: rootReducer
})
// const store = createStore(rootReducer);

export default store;