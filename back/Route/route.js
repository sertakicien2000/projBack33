var express = require('express'),
app = express.Router();
var control =require('../controller/post')
var cors = require('cors')

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }))
var methodOverride = require('method-override')
app.use(methodOverride('X-HTTP-Method')) //          Microsoft
app.use(methodOverride('X-HTTP-Method-Override')) // Google/GData
app.use(methodOverride('X-Method-Override')) //
app.use(methodOverride('_method'));
// app.use(methodOverride(function (req, res) {
//   if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     var fs = require('fs');
//         var sa = fs.readFileSync("./Model/note.json", "utf8");
//         var obj = JSON.parse(sa)
//         for(var i=0;i<obj.length;i++){
           
//                 var method = req.body._method
                
//                 return method
            
//         }
//     // if(req.body.id){
        
   
   
//   }
// })) // }

app.route('/test')
    .post(control.post )
    
    .delete( control.delet)
    .get( cors(),control.get)
    .put(control.put)
module.exports = app
    //other routes..
    