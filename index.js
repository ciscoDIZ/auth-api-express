"use strict";

const app = require('./app');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {DB_URI, DB_USER, DB_PASSWORD, DB_NAME} = app.locals.config;
function throwError(err) {
    throw new Error(err)
}
const PORT = process.env.PORT || 3977;
mongoose.connect(DB_URI, {
    user: DB_USER,
    pass: DB_PASSWORD,
    dbName: DB_NAME,
},(error) => {
    try{
        if(error) {
            throwError(error);
        }
        console.log('conexión base de datos ok');
        app.listen(PORT,() => {
            console.log(`Auth server listening at http://localhost:${5000}`)
        });
    }catch (e) {
        console.log(e)
    }
});

