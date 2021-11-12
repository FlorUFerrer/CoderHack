const mongoose = require ("../bin/mongodb"); 
const categoryShema = new mongoose.Schema({
    name: String
});
/*categoryShema.statics.findByIdAndValidate = async function(id){
    const document = await this.findById(id);
    if(!document){
        return{
            error:true,
            message:"No existe categoria"
        }
    }
    return document;
}*/
module.exports = mongoose.model ("categorias", categoryShema)