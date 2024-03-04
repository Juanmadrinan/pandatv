const app = require('./app');
require('W:/repos/pandatv/Backend/db/db-connection-mongo.js');
const tipoRoutes = require('./Backend/routes/tipoRoutes');
const productoraRoutes = require('./Backend/routes/productoraRoutes');
const genreRoutes = require('./Backend/routes/genreController');
const directorRoutes = require('./Backend/routes/directorRoutes');
const genreRoutes = require('./Backend/routes/genreRoutes');


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
main();