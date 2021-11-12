
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var proyectosRouter = require('./routes/proyectos');//crear var "nombre de la variable"...
var categoriasRouter = require('./routes/categorias');
var app = express();
const jwt = require("jsonwebtoken")

// view engine setup
app.set("secretKey","Api2021")
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//PRIMER NIVEL DE RUTEO
app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('/proyectos',validateUser, proyectosRouter); //para validar un usuario 
app.use('/proyectos', proyectosRouter); //agrego al mismo tiempo que se crea la variable
app.use('/categorias', categoriasRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
function validateUser(req,res,next){
  jwt.verify(req.headers['x-access-token'],req.app.get("secretKey"),function(err,decoded){
    if(err){
      res.json({message:err.message})
    }else{
      console.log(decoded)
      next()
    }
  })
}
app.validateUser=validateUser
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({error:true,"message":err.message})/*DEVUELVE UN JSON*/ 
  //res.render('error');/*DEVUELVE UN HTML*/
});

module.exports = app;
