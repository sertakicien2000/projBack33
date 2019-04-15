
var express = require('express'),
app = express();
var routes = require('./Route/route');
app.use('/', routes);
    
app.listen(8080,function(){
    console.log('Server demarer');
});

