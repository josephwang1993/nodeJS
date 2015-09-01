var fs = require('fs')

var buf = fs.readFileSync(process.argv[2])

var line_num = 0

var str = buf.toString()

var str_arr = str.split('\n')

console.log(str_arr.length - 1)