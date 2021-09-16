//se exporta pora poder usar las variables de entorno 
require('dotenv').config();
const Server =require('./models/Server.js');

const server =new Server();



server.listen()