const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.use("/kweeni", require('./routes/kweeni'));

app.listen(3000, () => console.log('Running...'))