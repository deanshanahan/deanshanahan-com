const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const favicon = require('serve-favicon')
const path = require('path')

const home = require('./home');

const app = express();


app.use(cors());

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('', home);

app.use(favicon(path.join(__dirname, 'public', 'favicon.png')))
app.use(express.static(__dirname + '/public'));

module.exports = app;
