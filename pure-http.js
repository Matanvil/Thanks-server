const { createServer } = require('http');

const PORT = 4000;

function onRequest(req, res) {
    console.log('request received');
    res.end('thanks');
}

const server = createServer(onRequest);

server.listen(PORT, () => {
    console.log('thanks server is running on port: ' + PORT);
});