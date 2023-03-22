// Core
import { createStore, applyMiddleware, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

// Instruments
import { rootReducer } from './rootReducer';
import {
    composeEnhancers,
    middleware,
} from './middleware';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware)),
);

export const persister = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>;

