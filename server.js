var express = require('express')
var wines = require('./routes/wines')
var app = express()
var Bp = require('body-parser');

app.use(Bp.urlencoded({extended: false}));

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines',wines.addwine);
app.put('/wines/:id',wines.updatewine);
app.delete('/wines/:id',wines.deletewines);

app.listen(2345)
