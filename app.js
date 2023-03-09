require('@babel/register');
const express = require('express');
// const morgan = require('morgan');
const config = require('./config/serverConfig');

const homeRouter = require('./routes/render/home.routes');
const myAlbomsRouter = require('./routes/render/myAlboms.routes');

const app = express();

const PORT = 3000;

config(app);

//render
app.use('/', homeRouter);
app.use('/myalboms', myAlbomsRouter);

app.listen(PORT, () => {
  console.log(`Сервер пашет на ${PORT} порту`);
});
