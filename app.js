require('@babel/register');
const express = require('express');
const morgan = require('morgan');



const app = express();

const PORT = 3000;

app.listen(PORT, () => { console.log(`Сервер пашет на ${PORT} порту`); });