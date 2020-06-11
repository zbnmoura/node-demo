const fs = require('fs');
const path = require('path');

function create_folder() {
    fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
        if (err) throw err;
        console.log('folder created');
    });
}

function write_file() {
    fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'hello world', (err) => {
        if (err) throw err;
        //write without overwhite
        fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\n- no, sorry', (err) => {
            if (err) throw err;
            console.log('file written to...');
        });
    });
}

function read_file() {
    fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

function rename_file() {
    fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hellojojo.txt'), (err) => {
        if (err) throw err;
        console.log('renamed');
    });
}

(() => {
    // create_folder();
    // write_file();
    // read_file();
    // rename_file();
})();
