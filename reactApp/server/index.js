const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('/*', function(req,res) {
    res.sendFile(path.resolve(__dirname,'..','build','index.html'));
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}!`);
});