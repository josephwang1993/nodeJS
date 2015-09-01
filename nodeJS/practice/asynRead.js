var fs = require('fs')

fs.readFile(process.argv[2], function(err, data){
	if (err) throw err;
	
	var str = data.toString()
	var str_arr = str.split('\n')

	console.log(str_arr.length - 1)
})
