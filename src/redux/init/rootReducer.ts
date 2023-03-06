// Core
import { combineReducers } from 'redux';

// Reducers
import { authReducer as auth,  productListReducer as productList } from '../reducers';


export const rootReducer = combineReducers({
    auth,
    productList,
});
