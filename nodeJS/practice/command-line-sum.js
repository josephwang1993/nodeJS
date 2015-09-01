function sum(cmdArr){
	var sum = 0
	for(var i = 2; i < cmdArr.length; i++){
		sum += Number(cmdArr[i])
	}
	return sum
}

console.log(sum(process.argv))