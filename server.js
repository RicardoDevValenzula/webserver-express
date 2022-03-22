const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helper');

const port = process.env.PORT || 3000;


app.use(express.static(__dirname + '/public'))

//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/partials', function(err) {});
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'ricardo',
    });
});

app.get('/about', function(req, res) {
    res.render('about', {});
});


app.get('/data', function(req, res) {
    res.send('Hello Data')
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});