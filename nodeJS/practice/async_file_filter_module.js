/**
 * Created by jwang on 8/31/2015.
 */


var path = require('path');
var fs = require('fs');
var ext = process.argv[2];

var mymodule = fs.readdir(path, function callback(err, list) {
    if (err) return err;
    for (var i = 0; i < list.length; i++) {
        if (path.extname(list[i]) == ext)
            console.log(list[i])
    }
});