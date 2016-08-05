'use strict';

const Hapi = require('hapi');
const mongojs = require('mongojs');

var booksPlugin = require('./routes/books');

// Create a server with a host and port
const server = new Hapi.Server();  
server.connection({  
    port: 3000
});

//Connect to database
var databaseUrl = "mongodb://<yourdatabaseuser>:<yourdatabasepassword>@ds019480.mlab.com:19480/<yourdatabasename>"; // 
var collections = ["books"]
server.app.db= mongojs(databaseUrl, collections);

//Load plugins and start server
server.register([booksPlugin], (err) => {
  if (err) {
    throw err;
  }

// Start the server
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

});