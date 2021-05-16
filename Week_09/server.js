const http = require("http");
const { request } = require("node:http");

http.createServer((request, require) => {
    let body = [];
    request.on('error', (err) => {
        console.log(err)
    }).on('data', (chunk) => {
        body.push(chunk.toString())
    }).on("end", () => {
        body = Buffer.concat(body).toString()
        console.log('body', body);
        request.writeHead(200, {'Content-Type': 'Text/html'})
        request.end('Hello world\n')
    }).listen(8088)
})
console.log('serve started');