console.log("Iniciamos el programa");
const activo=document.querySelector("#Activo");
const desactivado=document.querySelector("#Desactivado");
const btnEnviar =document.querySelector("#btnEnviar");
const txtMensaje =document.querySelector("#txtMensaje");
//Iniciamos el socket o la conexion de nuestro cliente
//Se debe poner el mismo nombre como esta en el serviddor elio es un funcion que ya esta preteminda solo se llama para obtener la inforamcion
const socket =io();

//Tambien se puede hacer eventos con el io ya esta por default se pone on para llamar la conexion
//Es connet no connection
socket.on('connect',()=>{
console.log("Cliente conectado");
activo.style.display="";
desactivado.style.display="none";

});


socket.on('disconnect',()=>{
  console.log('Cliente desconectado');
desactivado.style.display="";
activo.style.display="none";

});
//Activamos la conexion y el playload es que recibimos desde el servidor como parametro

socket.on('enviar-mensaje',(playload)=>{
console.log(playload);
});


btnEnviar.addEventListener('click', () => {
const mensaje=txtMensaje.value;
const playload = {
mensaje,
id:"1244",
fecha:new Date().getTime()
}
//este para poder enviar mensaje hacia al backend con emit
//sepuede poner un tercer argumento es opcional pero es un callback que es un callback es una funcion anonima
//el id lo recibimos desde el servidor y lo mostramos en la parte de frente con on socket.on
socket.emit('enviar-mensaje',playload,  (id) =>{
console.log(`Desde el servidor ${id}`);
});

})


