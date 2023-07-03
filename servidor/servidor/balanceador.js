const express = require('express');//Son instalaciones de paquetes para manejar node
const request = require('request');

const app= express();//Se prepara el servidor

const servers =[//hacemos un arreglo de los servidores que seran balanceados
    'http://localhost:3000',//Existen dos host del mismo port por el favicon y la pagina
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3001'

];

let cur=0;//Variable para posicionarnos en el arreglo

const handler= (req,res)=>{//El handler nos permite redirigir la peticion al servidor
    console.log(servers[cur]);
    req.pipe(request({url: servers[cur]+req.url})).pipe(res);
    cur = (cur+1)%servers.length;

};

const server = app.get('*',handler).post('*',handler);//todo get y pos los mandamos al handler

server.listen(8080);//escuchamos por el puerto 8080

//El balanceador en teoria redirige el trafico de servidor a servidor.