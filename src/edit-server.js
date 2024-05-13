const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world!');
});

server.listen(port, hostname, () => {
    console.info(`Servidor rodando na porta ${port}`);
});


