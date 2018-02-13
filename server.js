const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

const publicPath = path.join( __dirname, 'public' );
const indexPath  = path.join( publicPath, 'index.html' );

// Config
app.use( express.static( publicPath, { redirect : false } ) );
app.set( 'view engine', 'html' );
app.use( function( request, response, next ) {
  response.set( 'Access-Control-Allow-Origin', '*' );
  response.set( 'Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' );
  response.set( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS' );

  next();
} );

// Routing
app.get( '/', function(request, response) {
  response.set( 'Cache-Control', 'no-cache' );

  response.sendFile( indexPath );
} );



// Welcome
// Cooking Times
  // Vegetables
  // Other
  // Dishes
// Packaged Goods
  // Frozen Dinners
  // Microwave Vegetables
  // Packaged Goods
// Equipment

app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});
