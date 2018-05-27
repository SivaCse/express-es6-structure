how to start the project?

npm start

==========================

how to change the database config, port etc?

inside /config.json

===================================

how to create a controller ie. report?

create a file report.js inside controllers/
 then follow below

 ```js

 import { Router } from 'express';
 import  customer  from './customer';
 import  user  from './user';
 import  report  from './report';

 export default () => {
 	let api = Router();

 	api.get('/', (req, res) => {
 		res.sendfile('./public/index.html');
 	});

   api = customer(api);

   api = user(api);

   api = report(api);

 	return api;
 }

 ```

 tahts it.

 =============================================

 how to create a function to save some data to db?

 follow these lines , create a function inside helpers/query.js


 ```js

 export const create = ({collection, data, ...params }) => {
   const callback = (cursor) => {
     cursor.create(data).toArray(resultSet(params));
   }
   connectDB({collection, callback });
 }

 ```

 ========================================

 how to run my angular/react application inside this project?

 build your angular/react project then place dist folder contents into public folder. 
