/*jshint esversion:6*/
"use strict";

var express = require("express"),
    http = require('http'),
    morgan = require("morgan"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    app = new express(),
    server = http.createServer(app);

// ==== Configure server =======================================================
app.use("/lib", express.static(__dirname + '/bower_components'));
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// ==== Load routing ===========================================================
require("./app/routes")(app);

app.get('/index.html', (req, res) => { res.sendfile('./public/index.html'); });
app.get('*', (req, res) => { res.status(404).send({}); });

// =============================================================================
server.listen(8000, "localhost");
server.on('listening', function() {
    console.log('App is available on http://%s:%d/ ',
      server.address().address, server.address().port);
});
