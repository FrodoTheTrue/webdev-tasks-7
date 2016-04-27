const fs = require('fs');
var handlebars = require('hbs').handlebars;
exports.index = (req, res) => {
    const data = {
    };

    res.render('index', Object.assign(data, req.commonData));
};