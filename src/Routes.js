// import React from 'react';
// import { Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './container/Login';
import App from './App';

export default [
	{
		key: 'app',
		path: '/',
		component: App,
		routes: [
			{
				key: 'home',
				path: '/',
				component: Home,
				exact: true,
				loadData: Home.loadData
			},
			{
				key: 'login',
				path: '/login',
				component: Login,
				exact: true
			}
		]
	}
];
