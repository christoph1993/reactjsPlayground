var express = require('express');
var path = require('path');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function(){
    console.log(`Listening on ${PORT}....`);
});