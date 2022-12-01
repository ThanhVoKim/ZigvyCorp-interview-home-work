import { useDispatch } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Saga
import createSagaMiddleware from 'redux-saga';
// Redux
import { reducer } from 'redux/reducers';

import rootSaga from './sagas';

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).prepend(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
