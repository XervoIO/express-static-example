var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/public-two'));

app.listen(process.env.PORT || 3000);