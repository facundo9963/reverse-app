const server = require('./src/app.js');
require('dotenv').config();
const PORT = process.env.PORT || 3001

server.listen(PORT,'0.0.0.0', () => {
    console.log(`%s listening at ${PORT}`); 
  });