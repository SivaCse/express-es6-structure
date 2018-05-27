import { Router } from 'express';
import  customer  from './customer';
import  user  from './user';

export default () => {
	let api = Router();

	api.get('/', (req, res) => {
		res.sendfile('./public/index.html');
	});

  api = customer(api);

  api = user(api);

	return api;
}
