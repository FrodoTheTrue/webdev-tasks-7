'use strict';

const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const publicDir = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({extended: true}));

app.use(express.static(publicDir));

app.set('port', (process.env.PORT || 5000));

app.use((err, req, res, next) => {
    console.error(err);
    next();
});

app.use((req, res, next) => {
    req.commonData = {
    };
    next();
});

require('./routes')(app);


app.listen(app.get('port'),
    () => console.log(`Listening on port ${app.get('port')}`));

module.exports = app;
