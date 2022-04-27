"use strict";

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
//const morgan = require('morgan');
const cors = require('cors');
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json')

const SETTINGS = dotenv.config();

app.disable('x-powered-by');
app.set('env', SETTINGS.parsed.ENV);
app.set('config', SETTINGS.parsed);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//app.use(morgan('combined'));
app.use(cors());

app.locals.env = app.get('env');
app.locals.config = app.get('config');

const user_routes = require('./routes/user');
const auth_routes = require('./routes/auth');
const housing_routes = require('./routes/housing');
const image_routes = require('./routes/image');
const comment_route = require('./routes/comment');

const apiBase = '/api';

app.use(apiBase, user_routes);
app.use(apiBase, auth_routes);
app.use(apiBase, housing_routes);
app.use(apiBase, image_routes);
app.use(apiBase, comment_route);

app.use('/', (req, res) => res.render('home'));
// app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
module.exports = app;
