const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer(function (request, response) {

  // response.setHeader("Access-Control-Allow-Origin","*");

  var ext = path.parse(request.url).ext;
  console.log(ext);

  if (ext == '.css') {

    var fileUrl = '.' + request.url;
    console.log(fileUrl);

    fs.readFile(fileUrl, function (err, data) {


      if (err) {
        response.writeHead(200, {
          'Content-Type': 'text/css',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        response.end();
      } else {
        response.writeHead(200, {
          'content-type': 'text/css',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write(data); //将index.html显示在客户端
        console.log(data, 45645645664566);

        response.end(data);

      }
    });

  } else if (ext == '.js') {

    console.log('js');

    var fileUrl = '.' + request.url;
    console.log(fileUrl);

    fs.readFile(fileUrl, function (err, data) {


      if (err) {
        response.writeHead(200, {
          'Content-Type': 'application/x-javascript',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        response.end();
      } else {
        response.writeHead(200, {
          'content-type': 'application/x-javascript',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write(data); //将index.html显示在客户端
        console.log(data, 45645645664566);

        response.end(data);
      }
    });


  } else if (ext == '.jpg') {

    console.log('jpg');

    var fileUrl = '.' + request.url;
    console.log(fileUrl);

    fs.readFile(fileUrl, function (err, data) {


      if (err) {
        response.writeHead(200, {
          'Content-Type': 'image/png',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        response.end();
      } else {
        response.writeHead(200, {
          'content-type': 'image/png',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write(data); //将index.html显示在客户端
        console.log(data, 45645645664566);

        response.end(data);
      }
    });


  } else if (ext == '.gif') {

    console.log('gif');

    var fileUrl = '.' + request.url;
    console.log(fileUrl);

    fs.readFile(fileUrl, function (err, data) {


      if (err) {
        response.writeHead(200, {
          'Content-Type': 'image/gif',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        response.end();
      } else {
        response.writeHead(200, {
          'content-type': 'image/gif',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write(data); //将index.html显示在客户端
        console.log(data, 45645645664566);

        response.end(data);
      }
    });


  } else if (ext == '.ttf') {

    console.log('ttf');

    var fileUrl = '.' + request.url;
    console.log(fileUrl);

    fs.readFile(fileUrl, function (err, data) {


      if (err) {
        response.writeHead(200, {
          'Content-Type': 'font/ttf',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        response.end();
      } else {
        response.writeHead(200, {
          'content-type': 'font/ttf',
          "Access-Control-Allow-Origin":'*',
        });
        // response.write(data); //将index.html显示在客户端
        console.log(data, 45645645664566);

        response.end(data);
      }
    });


  } else {

    console.log('html');

    var fileUrl = request.url;
    if (path.parse(request.url).ext != '.html') {

      fileUrl = fileUrl.substring(1, fileUrl.length) + '.html';
      console.log('接收到了客户端的请求');
    } else {
      fileUrl = '.' + request.url;
    }

    fs.readFile(fileUrl, function (err, data) {


      console.log();


      if (err) {
        response.writeHeader(404, {
          'content-type': 'text/html',
          "Access-Control-Allow-Origin":'*',
        });
        response.write('<h1>404错误</h1><p>你要找的页面不存在</p>');
        response.end();
      } else {
        response.writeHeader(200, {
          'content-type': 'text/html',
          "Access-Control-Allow-Origin":'*',
        });
        console.log(data, 45645645664566);
        response.write(data); //将index.html显示在客户端
        response.end();
      }
    });




  }


});


// let options ={
//   hostname:'localhost',
//   port:8000,
//   path:'/api/jobs/list?page=1&count=10',
//   method:'GET'
// };

// let request = http.request()



server.listen(8080, (error) => {
  if (error) {
    console.log('启动失败');
  } else {
    console.log('启动成功');
  }
});