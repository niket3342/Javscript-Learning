//var has a global scope
var hello = `niket`
var name = 'harry'
var marks;
marks = 89;
console.log(name);
console.log(hello, marks);


const city = 'Pune';
console.log(city);

//let has a block level scope
{
let name = 'Niket';
console.log(name);
}


const arr1 = [12,15,56,78,80];
console.log(arr1);
arr1.push(90);
console.log(arr1);
