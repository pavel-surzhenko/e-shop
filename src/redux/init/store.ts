// Core
import { createStore, applyMiddleware, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

// Instruments
import { rootReducer } from './rootReducer';
import {
    composeEnhancers,
    middleware,
} from './middleware';


export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

