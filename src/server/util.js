import React from 'react';
import { StaticRouter, Route } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';

export const render = (store, routes, req) => {
	const content = renderToString(
		<Provider store={store}>
			<StaticRouter location={req.path} context={{}}>
				<div>
					{/* {routes.map(route => (
						<Route {...route} />
					))} */}
					{renderRoutes(routes)}
				</div>
			</StaticRouter>
		</Provider>
	);

	return `<html><body><div id="root">${content}</div><script> window.__context__ = {state: ${JSON.stringify(
		store.getState()
	)}} </script><script src='/index.js'></script></body></html>`;
};
