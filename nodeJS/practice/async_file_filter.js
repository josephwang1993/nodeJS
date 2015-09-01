/**
 * Created by jwang on 8/31/2015.
 */

var myModule = require('./async_file_filter_module.js');
var dir = process.argv[2];
var ext = process.argv[3];

myModule(dir, ext, function(err, list){
	if(err)
		return err;
	list.forEach(function(file){
		console.log(file);
	})
});
