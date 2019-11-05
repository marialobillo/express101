const express = require('express');
const app = express();

// app comes with a use method
app.use(express.static('public'))


app.listen(3000);
console.log('The server is running on 3000 port');
