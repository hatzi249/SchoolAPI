const express = require('express');
const app = express ();
const port = process.env.PORT || 3000;

const cors = require ('cors');
app.use(cors()); 
app.options('*', cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());

const route = require ('./routes/routes')();
app.use('/api', route);

app.server = app.listen(port, () => { 
    console.log(`Running on port ${port}`); 
});

module.exports = app;