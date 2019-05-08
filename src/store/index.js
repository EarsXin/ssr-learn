import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducers } from '../container/Home/store';
import clientAxios from '../client/request';
import serverAxios from '../server/request';

const reducer = combineReducers({
	home: homeReducers
});

export const getServerStore = () => {
	return createStore(
		reducer,
		applyMiddleware(thunk.withExtraArgument(serverAxios))
	);
};

export const getClientStore = () => {
	const defaultState = window && window.__context__ && window.__context__.state;
	return createStore(
		reducer,
		defaultState,
		applyMiddleware(thunk.withExtraArgument(clientAxios))
	);
};
