const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist/public'));
app.listen(port, () => console.log("listening on port " + port));
require('./server/routes')(app);