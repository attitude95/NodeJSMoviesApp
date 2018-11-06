var http = require('http');
var fs = require("fs");
let jsonData = JSON.parse(fs.readFileSync('movieslisting.json', 'utf-8'))
console.log(jsonData)


http.createServer(function (request, response) {

    if (request.url === "/index") {
        fs.readFile("index.html", function (err, data) {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end();
        });
    }
    else if(request.url==="getDataByTitle"){
        console.log("In get list by Title");
    }
    else if (request.url === "/getJSON") {
        console.log("In JSON Fun");
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify(jsonData));
        console.log(jsonData)
        response.end();

    }

    else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<b>Hey there!</b><br /><br />This is the default response. Requested URL is: ' + request.url);
        response.end();
    }
}).listen(3000);