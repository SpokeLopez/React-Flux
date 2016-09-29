/*eslint no-console:0 */
'use strict';
require('core-js/fn/object/assign');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

const express= require('express');
const http = require('http');
const engine = require('socket.io');
const request = require('request');

const port = 3000;
const app = express();

let server = http.createServer(app).listen(port, () => {
	console.log('Escuchando en el puerto:' +port);
});

const io = engine.listen(server);

io.on('connection', (socket) => {
	request('https://randomuser.me/api/',(err,response,body) => {
		io.emit('people', body);
	});
socket.on('ask', () => {
	request('https://randomuser.me/api/',(err,response,body) => {
		io.emit('people', body);
	});
		});
			});

new WebpackDevServer(webpack(config), config.devServer)
.listen(config.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + config.port);
  console.log('Opening your system browser...');
  open('http://localhost:' + config.port + '/webpack-dev-server/');
});
