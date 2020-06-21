var express = require('express');
var app = express();
app.use(express.static('public'));

var logger = require('morgan');
app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var cookieParser = require('cookie-parser');
app.use(cookieParser());

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const swagger = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs));

const rotasV1Categorias = require('./api/v1/categorias/Route');
app.use('/api/v1/categorias', rotasV1Categorias.default);

const rotasV1Produtos = require('./api/v1/produtos/Route');
app.use('/api/v1/produtos', rotasV1Produtos.default);

const rotasV1Compras = require('./api/v1/compras/Route');
app.use('/api/v1/compras', rotasV1Compras.default);


const config = require('./config');
app.listen(config.PORT, function () {
  console.log(`App currently running; navigate to localhost:${config.PORT} in a web browser.`);
});


// catch 404 and forward to error handler
var createError = require('http-errors');
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
