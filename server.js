const express = require('express');
const app = express();

app.get('/', function (req, res) {

 return res.send('Hello World');

});

app.listen(process.env.PORT || 8080);

