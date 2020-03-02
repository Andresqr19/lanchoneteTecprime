var express = require('express');
var app = express()
    ,path = require('path')
    ,http = require('http')

app.use(express.static('./public'));
// habilitando HTML5MODE
app.all('/*', function(req, res) {
    res.sendFile(path.resolve('public/index.html'));
});

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});

