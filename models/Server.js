//instalamos la libreria de socket para tener la comunicacion desde nuestro backend npm i socket.io

const express = require('express');
const cors = require('cors');
const {ControladorSocket}=require('../sockets/controlador')


class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
         //de pasamos nuestra app de express al servidor de socket 
        this.server=require('http').createServer(this.app);
        //el io  es donde esta toda la informacion de los socket
        this.io=require('socket.io')(this.server);

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();

       //Eventos de Socket
        this.Sockets();
    }

    async conectarDB() {
        await dbConnection();
    }


    middlewares() {

        // CORS
        this.app.use( cors() );

    

        // Directorio Público
        this.app.use( express.static('public') );

      

    }

    routes() {
        
        //this.app.use( this.paths.auth, require('../routes/auth'));
        
        
    }
    Sockets(){
      //Aqui es la configuracion de socket devuelve un valor aqui no se pone los parentesis solo una flecha de retorno
      //el socket id nos da un valor ya preteminado por la libreria todo va dentro del this 
    this.io.on('connection',ControladorSocket);
}

    listen() {
        //de pasamos el server es donde esta la conexion de los sockets ya que metimos nuestra app en express adentro del servidor del socket
        this.server.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
