const app = require('./app');
require('W:/repos/pandatv/Backend/db/db-connection-mongo.js');

async function main() {
  await app.listen(4321);
  console.log('Server on port 4321, Congratulations!');
}

app.get('/', (req, res) => {
  res.send('Hello World');
})

main();