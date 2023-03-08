require('@babel/register');
const express = require('express');
const morgan = require('morgan');
const config = require('./config/serverConfig');

const homeRouter = require('./routes/render/home.routes');

const app = express();

app.use('/', homeRouter);


const PORT = 3000;

config(app);

app.listen(PORT, () => { console.log(`Сервер пашет на ${PORT} порту`); });