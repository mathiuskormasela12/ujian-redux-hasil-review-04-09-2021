// ===== Root Reducer
import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import {persistReducer} from 'redux-persist';

// import all reducers
import counterReducer from './counterReducer';
import userReducer from './userReducer';

const rootPersistConfig = {
  key: 'root',
	storage,
	blacklist: ['counter']
};

const counterPersistConfig = {
	key: 'counter',
	storage,
	stateReconciler: hardSet
};

const rootReducer = combineReducers({
	counter: persistReducer(counterPersistConfig, counterReducer),
	user: userReducer
});

export default persistReducer(rootPersistConfig, rootReducer);