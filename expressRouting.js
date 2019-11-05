const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('this is the get option');

});

app.post('/', (req, res) => {

});

app.delete('/', (req, res) => {

});

app.all('/', (req, res) => {
    res.send('Hello');
});


app.listen(3000);