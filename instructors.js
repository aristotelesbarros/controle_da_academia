
const fs = require("fs")
const data = require ("./data.json")

exports.post = function(req,res){
        const keys = Object.keys (req.body)
        for (key of keys){
            if (req.body[key] == ""){
                return res.send ("formulario invalido")
            }
        }
        req.body.created_at = Date.now()
        req.body.birth = Date.parse(req.body.birth)
        req.body.id = Number (data.instructors.length)+1

       let {avatar_url,gender,services,created_at,id} = req.body
       
       birth = Date.parse(birth)
       created_at = Date.now()
       id = Number (data.instructors.length)



     fs.writeFile("data.json",JSON.stringify(data,null,2),function(err){
       if (err) return res.send("erro ao salvar o arquivo")
     return res.redirect ("/instructors")
    
     })

     }
        
    

   
    

