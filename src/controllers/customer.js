import { Router } from 'express';
import { find } from '../helpers/query';

export default (api) => {

	api.get('/customers', (req, res) => {
    find({collection:'customer',success:(data)=>{res.json(data)},failure:(err)=>{console.log(err)}});
	});

	return api;
}
