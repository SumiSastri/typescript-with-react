// iterating over the keys in an object to find props and methods
function Circle(radius: number) {
    this.radius = radius;
    this.draw = function (){
        console.log('draw circle with radius')
    }
}
const circle = new Circle(10)
console.log(circle)
console.log(circle.draw())

for (let key in circle){
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key], `logs keys with for-in loops over obj keys`)
}
const keys = Object.keys(circle)
console.log(keys, `logs props & methods as an array with Object.keys() method`)

if ('radius' in circle) {
    console.log('finds props only or methods only with the in operator')
}
//  for loop initial value, condition, increment or decrement
for (let i: number = 0; i < 3; i++) {
    console.log (`logs for loop iterations on ${i}`)
}
//  while loop, excutes code while the condition set is true stops when it is false
let i: number = 0;
while (i<5) {
    console.log(` logs while loop ${i}`)
    i++;
}

// do while break & continue