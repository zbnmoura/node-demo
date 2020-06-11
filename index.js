const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 8081;

const server = http.createServer((req, res) => {
    const { url } = req;
    //build file path
    const file_path = path.join(__dirname, 'public', url === '/' ? 'index.html' : url);
    //extension of file
    const ext_name = path.extname(file_path);
    //default/inital content type
    let content_type = 'text/html';

    //check extension and set content type
    switch (ext_name) {
        case '.js':
            content_type = 'text/javascript';
            break;
        case '.css':
            content_type = 'text/css';
            break;
        case '.json':
            content_type = 'application/json';
            break;
        case '.png':
            content_type = 'image/png';
            break;
        case '.jpg':
            content_type = 'image/jpg';
            break;
    }
    //read file
    fs.readFile(file_path, (err, data) => {
        if (err) {
            //error
            if (err.code === 'ENOENT') {
                //page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data, 'utf8');
                });
            } else {
                //other server error
                res.writeHead(500, { 'Content-Type': 'text/html' });
                res.end(`server error: ${err.code}`);
            }
        } else {
            //success
            res.writeHead(200, { 'Content-Type': content_type });
            res.end(data, 'utf8');
        }
    });

    //// api style
    // if (url === '/api/users') {
    //     const users = [
    //         { name: 'tobia1', age: 40 },
    //         { name: 'tovbia2', age: 40 },
    //         { name: 'tovbia3', age: 40 },
    //     ];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }
});

server.listen(PORT, () => console.log(`running on: ${PORT}`));
