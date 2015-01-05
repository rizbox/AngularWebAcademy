/**
 * Created by ahmed on 1/4/2015.
 */

var Course = require('mongoose').model('Course')


exports.getCourse = function(req, res) {
    Course.find({}).exec(function(err, collection) {
        res.send(collection);
    })
};