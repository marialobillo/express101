const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        //res.write('');
        const homePageHTML = fs.readFileSync('node.html');
        console.log(homePageHTML);
        res.write(homePageHTML);
        res.end();
    } else if(req.url === '/node.jpg'){
        res.writeHead(200, {'content-type': 'image/jpg'});
        const image = fs.readFileSync('node.jpg');
        res.write(image);
        res.end();
    }else if(req.url === '/style.css'){
        res.writeHead(200, {'content-type': 'text/css'});
        const css = fs.readFileSync('style.css');
        res.write(css);
        res.end();
    }
    else {
        res.writeHead(200, {'content-type': 'text/html'});
        res.write('<h4>Sorry, Not page found</h4>');
        res.end();
    }
});

server.listen(3000);
