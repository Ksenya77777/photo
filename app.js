require('@babel/register');
const express = require('express');
// const morgan = require('morgan');
const config = require('./config/serverConfig');

const homeRouter = require('./routes/render/home.routes');
const myAlbomsRouter = require('./routes/render/myAlboms.routes');
const authRoute = require('./routes/render/auth.route')

const app = express();

const PORT = 3000;

config(app);
app.use(express.static('public'))

//render
app.use('/', homeRouter);
app.use('/myalboms', myAlbomsRouter);
app.use('/auth', authRoute)





app.listen(PORT, () => {
  console.log(`Сервер пашет на ${PORT} порту`);
});
