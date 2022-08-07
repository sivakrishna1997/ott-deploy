const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

module.exports = function () {
    var app = express();

    app.use('*', cors());


    app.use(bodyParser.json({ limit: '500mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
    
    app.use(express.static(path.join(__dirname, '../public')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })

    return app;
}