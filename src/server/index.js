import express from 'express';
import proxy from 'express-http-proxy';
import { matchRoutes } from 'react-router-config';
import { render } from './util';
import routes from '../Routes';
import { getServerStore } from '../store/index';

const app = express();
app.use(express.static('public'));
app.use(
	'/api',
	proxy('http://47.95.113.63', {
		proxyReqPathResolver: function(req) {
			return '/ssr/api' + req.url;
		}
	})
);

app.get('*', function(req, res) {
	const store = getServerStore();

	const matchedRoutes = matchRoutes(routes, req.path);

	const promises = [];
	matchedRoutes.forEach(item => {
		console.log(item.route.loadData);
		if (item.route.loadData) {
			promises.push(item.route.loadData(store));
		}
	});

	Promise.all(promises).then(() => {
		res.send(render(store, routes, req));
	});
});

app.listen(3000, () => console.log('app listening on port 3000!'));
