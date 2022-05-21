"use strict";

const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
// const morgan = require('morgan');
const cors = require('cors');
const app = express();
const swaggerJsdoc = require('swagger-jsdoc');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const specs = YAML.load('./api.yaml')

const SETTINGS = dotenv.config();

app.disable('x-powered-by');
app.set('env', SETTINGS.parsed.ENV);
app.set('config', SETTINGS.parsed);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// app.use(morgan('combined'));
app.use(cors({origin: "*"}));
/*const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Express API for JSONPlaceholder',
        version: '1.0.0',
        description:
            'This is a REST API application made with Express. It retrieves data from JSONPlaceholder.',
        license: {
            name: 'Licensed Under MIT',
            url: 'https://spdx.org/licenses/MIT.html',
        },
        contact: {
            name: 'JSONPlaceholder',
            url: 'https://jsonplaceholder.typicode.com',
        },
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routes/!*.js'],
};
const specs = swaggerJsdoc(options)*/
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
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
