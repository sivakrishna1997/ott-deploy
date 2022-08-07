const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs')

module.exports = function () {
    var app = express();

    app.use('*', cors());


    app.use(bodyParser.json({ limit: '500mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));
    
    app.use(express.static(path.join(root, '/public')));
    // app.use(express.static(path.join(__dirname, '../public')));
    app.get('*', (req, res) => {
        fs.readFile(root + '/public/index.html', 'utf8', (err, text) => {
            res.send(text);
        });
        // res.sendFile(path.join(__dirname, '../public/index.html'));
    })
   

    return app;
}