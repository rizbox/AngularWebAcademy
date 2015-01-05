/**
 * Created by ahmed on 12/28/2014.
 */
var path = require('path');
var rootPath=path.normalize(__dirname+'/../../')
module.exports={
    development:{
        db:'mongodb://localhost/multivision',
        rootPath:rootPath,
        port:process.env.PORT || 3000
    },
    production:{
        db:'mongodb://rizwan:123456@ds029831.mongolab.com:29831/multivisiondb',
        rootPath:rootPath,
        port:process.env.PORT || 3000
    }
}

//db:'mongodb://localhost/multivision',
