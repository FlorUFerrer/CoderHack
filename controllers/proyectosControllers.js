const proyectosModel = require ("../models/proyectosModel")
const categoriasModel = require ("../models/proyectosModel") 
/*LOGICA DEL PROYECTO */
module.exports={
    getAll: async function(req, res, next) {
        try{
        const proyectos = await proyectosModel.find().populate("categoria")/*POPULATE ES PARA LISTAR LAS CATEGORIAS VINCULADAS*/
        res.json(proyectos);
        }catch(e){
        next (e)
        }
    },
    getAllPaginate: async function(req, res, next) {
        try{
        const proyectos = await proyectosModel.paginate({
            name:req.query.name //para filtrar la api
        } , {
            sort:{name:1},//Ordenar de forma ascendente por la propiedad name (-1 de manera descendente)
            populate:"categoria",
            //limit:1,//sin QueryString
            limit:req.query.limit || 2,//Querystring son los ? que van por URL
            page:req.query.page || 1 //QueryString son los & que van por URL

        })// para utilizar el paginate en la parte del back
        res.json(proyectos);
        }catch(e){
        next (e)
        }
    },
    getById : async function(req, res, next) {
        try{
        const proyectos = await proyectosModel.findById(req.params.id)
        res.json(proyectos);
        }catch(e){
        next (e)
        }
    },
    create: async function(req, res, next) {
        try{
        console.log(req.body)
        const proyecto = new proyectosModel({
            name: req.body.name,
            description: req.body.description,
            categoria: req.body.categoriaId,
            type: req.body.type
        })
        const proyectos = await proyecto.save()
        res.json(proyectos)
        }catch(e){
        console.log(e);
        next (e)/*LLAMA A LA FUNCION ERRORS HANDLER de APP OTRA FORMA DE MANEJAR ERRORES*/
        //res.json({error:true,"message":e.message})/*MANEJO DE ERRORES PARA HACER QUE EL CAMPO NAME SEA OBLIGATORIO VER en PROYECTOCONTROLLERS*/
        }
    },
    update: async function(req, res, next) {
        console.log(req.params.id)
        console.log(req.body) 
        try{
            const proyecto =  await proyectosModel.updateOne({_id:req.params.id},req.body)
            res.json(proyecto)
            }catch(e){
            next (e)
            }    
    },
    delete: async function(req, res, next) {
        try{
            const proyecto =  await proyectosModel.deleteOne({_id:req.params.id},req.body)
            res.json(proyecto)
            }catch(e){
            next (e)
            }
    }    
}   