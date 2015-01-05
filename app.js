
/**
 * Module dependencies.
 */

var express = require('express');
//var routes = require('./routes');
//var user = require('./routes/user');
var http = require('http');
var path = require('path');
//var stylus=require('stylus');
//var mongoose=require('mongoose');
//var passport=require('passport');
//var LocalStrategy=require('passport-local').Strategy;


var env=process.env.NODE_ENV=process.env.NODE_ENV || 'development';
var app = express();

var config=require('./server/config/config')[env];
require('./server/config/express')(app,config);



//function compile(str,path){
//    return stylus(str).set('filename',path);
//}
//
//// all environments
//app.set('port', process.env.PORT || 3000);
//app.set('views', path.join(__dirname, 'server/views'));
//app.set('view engine', 'ejs');
//app.use(stylus.middleware(
//    {
//        src:__dirname+'/public',
//        compile:compile
//    }
//));
//app.use(express.favicon());
//app.use(express.logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded());
//app.use(express.methodOverride());
//app.use(express.cookieParser('your secret here'));
//app.use(express.session());
//app.use(app.router);
//app.use(express.static(path.join(__dirname, 'public')));

//if(env==='development') {
//    mongoose.connect('mongodb://localhost/multivision');
//}else{
//    mongoose.connect('mongodb://localhost/multivision');
//}
/*
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
    console.log('multivision db opened');
});
*/
require('./server/config/mongoose')(config);
require('./server/config/passport')();

/*
var messageSchema = mongoose.Schema({message: String});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc) {
    console.log('findONE :: '+ messageDoc.message);
    mongoMessage = messageDoc.message;
});
*/
//var User = mongoose.model('User');
//
//passport.use(new LocalStrategy(
//    function(username, password, done) {
//        console.log('username app.js:  '+username);
//        User.findOne({username:username}).exec(function(err, user) {
//            if(user && user.authenticate(password)) {
//                return done(null, user);
//            } else {
//                return done(null, false);
//            }
//        })
//    }
//));

//app.use(function(req,res,next){
//    console.log(req.user);
//    next();
//});


//passport.serializeUser(function(user, done) {
//    if(user) {
//        done(null, user._id);
//    }
//});
//passport.deserializeUser(function(id, done) {
//    User.findOne({_id:id}).exec(function(err, user) {
//        if(user) {
//            return done(null, user);
//        } else {
//            return done(null, false);
//        }
//    })
//});


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//app.get('/', routes.index);
//app.get('/users', user.list);


//app.get('/partials/:partialPath', function(req, res) {
/*
app.get('/partials/*', function(req, res) {
    console.log('partialPath::'+ req.params);
   // res.render('partials/' + req.params.partialPath);
    res.render('../../public/app/' + req.params);
});

app.get('/', function(req, res) {
//    console.log('mongoMessage :: '+mongoMessage);
    res.render('index');
});
*/
//, {
//    mongoMessage: mongoMessage
//}

//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});

require('./server/config/routes')(app);
http.createServer(app).listen(config.port, function(){
    console.log('Express server listening on port ' + config.port);
});
