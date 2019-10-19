const http = require('http');
const url = require('url');
const path = require('path');
const qs = require('querystring');
const conf = require('./config');
const routes = require('./routes');

const server = http.createServer();

server.on('request',(req,res)=>{

    const {pathname} = url.parse(req.url);
    let fullPath = path.join(conf.root,pathname);

    
    fullPath = qs.unescape(fullPath);

    
    // console.log(fullPath);

    routes(req,res,fullPath);

});





server.listen(conf.port,conf.hostname,(error)=>{
    if(error) throw error;
    const serverPath = `http://${conf.hostname}:${conf.port}`;
    console.log('server is listening :'+serverPath);
    
});