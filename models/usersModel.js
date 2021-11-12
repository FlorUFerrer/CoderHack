const mongoose = require("../bin/mongodb");
const errorMessage=require("../util/errorMessage")
const validators = require("../util/validators")
const bcrypt = require("bcrypt")

const usersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
    },
    email:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        unique:true
        
    },
    password:{
        type:String,
        required:[true,errorMessage.GENERAL.campo_obligatorio],
        validate:{
            validator:function(value){
                return validators.passwordValidado(value)
            },
            message:errorMessage.USERS.passwordIncorrecto
        }
    }
});
usersSchema.pre("save",function(next){ //pre-post
    this.password = bcrypt.hashSync(this.password,10)//Propiedad pasword le asigna el pasword encriptado con 10 saltos
    next()
})
module.exports = mongoose.model("users", usersSchema)