const usersModel = require("../models/usersModel")
const bcrypt = require("bcrypt")
const jwt = require("Jsonwebtoken")
module.exports={
    
    create:async function(req, res, next) {
        try{
        const user = new usersModel({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password
        })
        const document = await user.save()
        
        res.json(document)
        }catch(e){
        
        next(e)
        }
        
    },
    login:async function(req, res, next) {
    try{
    const user = await usersModel.findOne({email: req.body.email})
    if(!user){
        res.json({message:"Email Incorrecto"})
        return
    }  
    if(bcrypt.compareSync(req.body.password, user.password)){
        const token = jwt.sign({userId:user._id},req.app.get("secretKey"),{expiresIn:"1h"})
        res.json({token:token})
    }else{
        res.json({message:"Password Incorrecto"})
        return   
    }
    }catch(e){
        
        next(e)
    }  
  },
    
}