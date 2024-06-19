
// console.log(25*25, "Multiply of two numbers")
// console.log(25/75, "Divide of two numbers")

const os = require('os');
const fs = require('fs');
const path = require('path');
const http = require('http');

const sanjuInfo=require('./Sanju')

// console.log(25+25, "Add of two numbers")
// console.log(os.arch(),"architecture function", "osplatform",os.platform(),"cpu lenght",os.cpus())


// const freeMemory = os.freemem();
// console.log('Free memory:', os.freemem());

console.log(sanjuInfo)


const Server=http.createServer((req,res)=>{

res.writeHead(200,{'Content-Type':'application/json'})

res.end(JSON.stringify(sanjuInfo))
})

Server.listen(5000,()=>{
    console.log("The server created successfully in the port 5000")
 })
 
