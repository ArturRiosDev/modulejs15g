//['HOla','mUndo']

const capitalizeWithMap = (arr) =>{
	let newArr = []
	arr.map(val=>newArr.push(val[0].toUpperCase()+val.slice(1,val.length).toLowerCase()))
	return newArr
}
let result = capitalizeWithMap(['HolA','mUndo'])
console.log(result)