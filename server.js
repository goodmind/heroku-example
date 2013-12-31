var http = require('http'),
    port = process.env.PORT || 5000;

http.createServer(function (request, response) {
    'use strict';
    response.end('Hello World...\n');
}).listen(port);
