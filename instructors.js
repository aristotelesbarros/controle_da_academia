
const fs = require("fs")

exports.post = function(req,res){
        const keys = Object.keys (req.body)
        for (key of keys){
            if (req.body[key] == ""){
                return res.send ("formulario invalido")
            }
        }

     fs.writeFile("data.json",JSON.stringify(req.body),function(err){
       if (err) return res.send("erro ao salvar o arquivo")
     return res.redirect ("/instructors")
    
     })

     }
        
    

   
    

