var express = require('express')
var wines = require('./routes/wines')
var app = express()

app.configure(function () {
    app.set('port', process.env.PORT || 2345);
    app.use(express.logger('dev'));
    app.use(express.bodyParser()),
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/wines', wines.findAll);
app.get('/wines/:id', wines.findById);
app.post('/wines',wines.addwine);
app.put('/wines/:id',wines.updatewine);
app.delete('/wines/:id',wines.deletewines);

app.listen(2345)
