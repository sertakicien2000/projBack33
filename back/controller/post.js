
exports.post=function (req, res){
    
        var fs = require('fs');
        var sa = fs.readFileSync("./Model/note.json", "utf8");
        var obj = JSON.parse(sa)
        if(req.body.nom && req.body.prenom ){
            if(obj.length==0){
                obj.push({
                    id: 0, nom: req.body.nom,
                    prenom: req.body.prenom,
                })
            }
            else if(obj.length>0){
                obj.push({
                    id: obj[obj.length-1].id +1, nom: req.body.nom,
                    prenom: req.body.prenom,
                })
            }
        }
   
       
        
        //  res.send(obj);
        //   res.end()
        fs.writeFileSync("./Model/note.json", JSON.stringify(obj))
          res.redirect("http://localhost:3000/test") 
    }

exports.delet=function (req, res) {
    var fs = require('fs');
    var sa = fs.readFileSync("./Model/note.json", "utf8");
    var obj = JSON.parse(sa)

    let id =req.body.id
    for (var h = 0; h < obj.length; h++) {
        if (id == obj[h].id ) {
            obj.splice(h,1)
          

            
        }



    }

    //  res.send(obj);
    //  res.end()
    fs.writeFileSync("./Model/note.json", JSON.stringify(obj))
    res.redirect("http://localhost:3000/test")
}
exports.get=function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    var fs = require('fs');
    var filename = "./Model/note.json";
    var sa = fs.readFileSync(filename, "utf8");
    


    
    res.write(sa);
    res.end();
};
exports.put=function (req, res) {
    var fs = require('fs');
    var sa = fs.readFileSync("./Model/note.json", "utf8");
    var obj = JSON.parse(sa)
let id =req.body.id
let nom=req.body.nom
let prenom=req.body.prenom
    for (var h = 0; h < obj.length; h++) {
       
            if (id == obj[h].id ) {
            
                if (nom) {
                    obj[h].nom = nom
                }
                if (prenom) {
                    obj[h].prenom = prenom
                }
    
    
            
        }
        



    }

//     res.send(obj);
//   res.end()
    fs.writeFileSync("./Model/note.json", JSON.stringify(obj))
    res.redirect("http://localhost:3000/test")
}