const app = require('./app');
require('./db/db-connection-mongo');
const tipoRoutes = require('./routes/tipoRoutes');
const mediaRoutes = require('./routes/mediaRoutes');
const productoraRoutes = require('./routes/productoraRoutes');
const genreRoutes = require('./routes/genreRoutes');
const directorRoutes = require('./routes/directorRoutes');

async function main() {
  await app.listen(4321);
  console.log('Server on port 4321, Congratulations!');
}

app.get('/', (req, res) => {
  res.send('Hola mundo!!!!!');
})

app.use('/api/tipo', tipoRoutes);
app.use('/api/productora', productoraRoutes);
app.use('/api/genre', genreRoutes);
app.use('/api/director', directorRoutes);
app.use('/api/media', mediaRoutes);

main();