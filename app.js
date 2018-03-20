const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());


app.use("/kweeni", require('./routes/kweeni'));
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))