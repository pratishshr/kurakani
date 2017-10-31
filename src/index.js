/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/16/16.
 */

import express from 'express';
import socketIO from 'socket.io';

import controllers from './controllers';

import socketService from './services/socketService';

import bodyParser from 'body-parser';
import * as handler from './middlewares/errorHandler';

const app = express();

// Configuration
app.set('port', process.env.PORT || '4444');
app.set('view engine', 'pug');
app.set('views', `${__dirname}/views`);

app.use(bodyParser.json());
app.use('/static', express.static(`${__dirname}/public`));

app.use(controllers);

// Error handler
app.use(handler.errorHandler);

// 404 Not Found
app.use(handler.notFoundHandler);

let server = app.listen(app.get('port'), () => {
  console.log('Server started at http://localhost:' + app.get('port'));
});

let io = socketIO(server);

io.on('connection', socket => socketService(socket, io));
