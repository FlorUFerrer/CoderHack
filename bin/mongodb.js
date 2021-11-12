var mongoose = require ('mongoose');
var mongoosePaginate = require ('mongoose-paginate-v2');

mongoose.connect ('mongodb://localhost/PrimeraApi2021', {useNewUrlParser:true}, function (error) {
    if (error) {
        throw error;    
    }else{
        console.log('Conectado a MongoDB')
    }
});
mongoosePaginate.paginate.options={
    limit:1, //Limete por defoult por si no lo declaro en el controllers 
    lean:false
}
mongoose.mongoosePaginate=mongoosePaginate;
module.exports= mongoose;
