import { combineReducers, configureStore, AnyAction, Store } from '@reduxjs/toolkit';
import { createWrapper, Context } from 'next-redux-wrapper';

import main from './reducers/main';
import home from './reducers/home';
import auth from './reducers/auth';
import signup from './reducers/auth';



const loggerMiddleware = store => next => action => {
	let result = next(action);
	// console.log('result', result);
	// console.log('STATES', store.getState());
	return result;
}



const makeStore = () => {
	const store = configureStore({
		reducer: {
			main,
			home,
			auth,
			signup
		},
		middleware: [loggerMiddleware]
	});
	return store;
}


export const wrapper = createWrapper<Store>(makeStore);