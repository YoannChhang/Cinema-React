import { createStore} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import seatsReducer from './seats/seatsReducer';

const persistConfig = {
    key: 'persist-key',
    version: 1,
    storage,
};

// Persist data on reload 
const persistedReducer = persistReducer(persistConfig, seatsReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

// const store = createStore(seatsReducer);

export default store;
export { persistor };