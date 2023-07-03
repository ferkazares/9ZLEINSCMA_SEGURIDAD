const http= require ("http");//Se crea el modulo, que nos permite reutilizar código (libererias).
const port1= 3000;//puerto en el que el servidor estara escuchando (mi maquina).
const port2= 3001;//puerto dos para otro servidor
//const sirve para declarar variables.


const server = http.createServer((req,res)=>{
    console.log("Use la funcion create server.");//Se muestra dos veces porque Google tambien hace una peticion favicon.icon, (crear un logo).
    //console.log(req.url);
    //console.log(req.method)
    //console.log(req.headers);

    res.statusCode=200;//codigo de estado.
    res.setHeader("Content-Type","text/plain");//Seteamos una cabezera a la respuesta, transparente para el usuario.
    res.end("Hola Mundo");//Finaliza la conexion, de lo contrario se quedaria abierta.

});//A la variable http le invocamos la funcion que permite, la peticion y la respuesta del servidor, esto sucede con cada peticion.


const server2 = http.createServer((req,res)=>{
    console.log("Use la funcion create server.");
    //console.log(req.url);
    //console.log(req.method)
    //console.log(req.headers);
    res.statusCode=200;//codigo de estado.
    res.setHeader("Content-Type","text/plain");
    res.end("Hola Mundo 2");

});


server.listen(port1, ()=>{//listen permite al servidor escuchar al puerto que seleccionamos
    console.log("Servidor 1 arrancado en el puerto "+port1);//Nos muestra por consola que el servidor se monto con exito.

});//Esto sucede la primera vez al lanzar el script.

server2.listen(port2, ()=>{
    console.log("Servidor 2 arrancado en el puerto "+port2);

});
