// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth,  productListReducer as productList, cartReducer as cart } from '../reducers';


export const rootReducer = combineReducers({
    auth,
    productList,
    cart
});
