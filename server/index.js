const express = require('express')
, bodyParser = require('body-parser')
, session = require('express-session')
, massive = require('massive')
, config = require('./config')
, app = module.exports = express()
, port = config.PORT
, MASSIVE_URI = config.MASSIVE_URI;
app.use(bodyParser.json());

// CONTROLLERS
// ============================================================
// const mainController = require('./controllers/mainController');
// GET ENDPOINTS
// app.get('/api/table', tableController.read);
// PUT ENDPOINTS
// app.put('/api/table/:id', tableController.update);
// POST ENDPOINTS
// app.post('/api/table', tableController.create);
// DELETE ENDPOINTS
// app.delete('/api/table/:id', tableController.delete);

massive({connectionString:'postgres://pgibqutb:oDbuBnTkGnhFb4AjC0s0kGMU1lV84gHx@babar.elephantsql.com:5432/pgibqutb'})
.then( db => {
  app.set('db', db)
  db.init();
  app.listen(port, console.log(`listening on port ${port}`));
})