import { Router } from 'express';
import { find } from '../helpers/query';

export default (api) => {

	api.get('/users', (req, res) => {
    find({collection:'user',success:(data)=>{res.json(data)},failure:(err)=>{console.log(err)}});
	});

	return api;
}
