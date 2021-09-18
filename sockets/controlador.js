//Aqui hacemos el controlador para tener mas acomodalo nuestro codigo

const ControladorSocket= (socket) =>{


     console.log("Cliente conectado exitosamente",socket.id)

    
     socket.on('disconnect',()=>{
       console.log("Cliente desconectado exitosamente",socket.id)          
});
//Debemo hacer primero la funcion desde  la parte de frente y enviar mensaje es el nombre hace renfencia ala conexio que hcicimos
//el platload es la informacion que viene desde la parte de frente
//Error mio el callback siempre va en donde esta en on si lo poner en emit nos produce un error
   socket.on('enviar-mensaje',(playload,callback)=>{
      //el broadcast es una funcion ya vienen con la libreria de socket se usa para enviar mensajes a todos los usuarios que esten conectados
     const id =12345567;
     callback(id);    
 //para poder enviar mensaje a todos los clientes debemos poner emit asi todos los clientes recibiran el mensaje con el 
     //Es con io para poder enviar a todas las conexiones
     //se debe poner el enviar-mensaje como referencia si no nolo envia
    // se puede poner un tercer argumento es opcional es un callback
    //el callback seria solo para enviar mensaje personalizados para el cliente asi como una repuesta a hacer una  peticion o un o token de autentication  
    socket.broadcast.emit('enviar-mensaje',playload);
})
 }

module.exports={
ControladorSocket
}