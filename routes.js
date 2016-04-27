'use strict';

const pages = require('./controllers/pages');

module.exports = function (app) {
    app.get('/', pages.index);

    app.use((err, req, res) => {
        console.error(err);
    });
};
