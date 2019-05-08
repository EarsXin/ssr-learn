import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from '../Routes';
import { getClientStore } from '../store/index';
import { renderRoutes } from 'react-router-config';

const store = getClientStore();

const App = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<div>
					{/* {routes.map(route => (
						<Route {...route} />
					))} */}
					{renderRoutes(routes)}
				</div>
			</BrowserRouter>
		</Provider>
	);
};

ReactDOM.hydrate(<App />, document.getElementById('root'));
