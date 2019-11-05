const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.all('/', (req, res) => {
    // express handle the headers
    // express handle the end
    //res.send(`<h1>This is the home page!</h1>`);
    console.log(path.join(__dirname + '/node.html'))
    res.sendFile(path.join(__dirname + '/node.html'));
});

app.all('*', (req, res) => {
    res.send("<h1>Sorry, this page does not exist.</h1>")
})

app.listen(3000);
console.log("The server is running on port 3000");