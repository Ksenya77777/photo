require('@babel/register');
const express = require('express');
// const morgan = require('morgan');
const config = require('./config/serverConfig');

const homeRouter = require('./routes/render/home.routes');
const myAlbomsRouter = require('./routes/render/myAlboms.routes');
const authRoute = require('./routes/render/auth.route');
const delAlbumRouter = require('./routes/render/myAlboms.routes');
const updateRouter = require('./routes/render/editAlbum.routes');
const fotoListRouter = require('./routes/render/fotoList.routes');
const app = express();

const PORT = 3000;

config(app);
app.use(express.static('public'));

//render
app.use('/', homeRouter);
app.use('/myalboms', myAlbomsRouter);
app.use('/auth', authRoute);
app.use('/delete', delAlbumRouter);
app.use('/edit', updateRouter);
app.use('/myalboms/fotolist', fotoListRouter);

app.listen(PORT, () => {
  console.log(`Сервер пашет на ${PORT} порту`);
});
