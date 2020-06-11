const http = require('http');

//create server object
http.createServer((req, res) => {
    res.write('hi');
    res.end();
}).listen(8081, () => console.log('running...'));
