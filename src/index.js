import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config.json';

import routes from './controllers/';

let app = express();
app.server = http.createServer(app);

app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use('/',routes());

app.server.listen(process.env.PORT || config.port, () => {
  console.log(`Started on port ${app.server.address().port}`);
});

export default app;
