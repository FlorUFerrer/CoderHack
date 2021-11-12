const mongoose = require ("../bin/mongodb")
const errorMessage = require ("../util/errorMessage")
const proyectosShema = new mongoose.Schema({
    /*MANEJO DE ERRORES PARA HACER QUE EL CAMPO NAME SEA OBLIGATORIO VER en PROYECTOSCONTROLLERS*/
    name: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio],/*ERROR EN CASTELLANO*/
        minlength: [5, errorMessage.GENERAL.minlength ]
    },
    description: {
        type: String,
        //required: true ERROR EN INGLES
        required: [true, errorMessage.GENERAL.campo_obligatorio]/*ERROR EN CASTELLANO*/
    },
    categoria: {
        type: mongoose.Schema.ObjectId,/*SE VA A RELACIONAR CON EL MODELO CATEGORIAS*/
        ref:"categorias"
    },
    /*TIPO DE PROYECTOS*/
    type: {
        type: String,
        enum: ["web","local"]
    }
})
proyectosShema.virtual("price_currency").get (function(){
    return "$" + this.price  
})
proyectosShema.set("toJSON",{getters:true,setters:true,virtual:true})/*ES A LOS FINES DE MODIFICAR UNA DB DE MANERA EXCEPCIONAL*/
proyectosShema.plugin(mongoose.mongoosePaginate)
module.exports =  mongoose.model("proyectos", proyectosShema )