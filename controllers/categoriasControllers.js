const proyectosModel = require ("../models/categoriasModel")
module.exports={
    getAll: async function(req,res,next){
        try{
            const proyectos = await proyectosModel.find()
            res.json(proyectos)
        }catch(e){
            next(e)
        }
    },
    create: async function(req,res,next){
        try{
            console.log(req.body)
            console.log(req.body.name)
            const categoria = new proyectosModel({
                name:req.body.name
            })
            const response = await categoria.save()
            res.json(response)
        }catch(e){
            next(e)
        }
    }
}