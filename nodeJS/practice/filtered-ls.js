var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var pth = process.argv[2];

fs.readdir(pth, function callback(err, list){
	//console.log(list);
	if (err) throw err;
	for (var i = 0; i < list.length; i++){
		if (path.extname(list[i]) == '.' + ext)
			console.log(list[i]);
	
	}
	
});