/**
 * Created by ahmed on 12/28/2014.
 */
var path = require('path');
var express = require('express');
var stylus=require('stylus');
var passport=require('passport');
//var flash = require('connect-flash');
//var connect = require('connect');

module.exports=function(app,config) {
    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

// all environments
   // app.configure(function() {
        //app.set('port', process.env.PORT || 3000);
      //  app.use(require('connect-multiparty')())
        app.set('views', path.join(config.rootPath, 'server/views'));
        app.set('view engine', 'ejs');
        //app.use(express.favicon());
        app.use(express.logger('dev'));

       // app.use(express.json());
       // app.use(express.urlencoded());
       // app.set('json spaces', 40);
       // app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        //app.use(express.cookieParser());
        app.use(express.bodyParser());
        app.use(express.session({secrete:'multi vision unicorns'}));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(stylus.middleware(
            {
                src: config.rootPath + '/public',
                compile: compile
            }
        ));
        //app.use(app.router);
       // app.use(flash());
        app.use(express.static(path.join(config.rootPath, '/public')));
    //});
}