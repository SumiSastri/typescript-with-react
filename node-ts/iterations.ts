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

// forEach
enum LanguagesKnown {English, French, Italian, Spanish}
let student = {
    Name: "Anil",
    Age: 5,
    Sex: 'M',
    Phone: 1314,
    Email: "anil@anil.com",
    Languages: [LanguagesKnown.Italian]
}
let studentsInfo = [
    {Name:"Rani", Age: 20, Sex: "F", Phone: 1234, Email:'rani@ranijhansi.com', Languages: [LanguagesKnown[0]]},
    {Name:"Raja", Age: 29, Sex: "M", Phone: 4567, Email:'raja@rajaram.com', Languages: [LanguagesKnown[1]]},
    {Name:"Ruby", Age: 5, Sex: "F", Phone: 8910, Email:'ruby@rubyroo.com', Languages: [LanguagesKnown.Italian]},
    {Name:"Ruba", Age: 12, Sex: "M", Phone: 1112, Email:'ruba@rubaroo.com', Languages: [LanguagesKnown.Spanish]}
]
// Looping through an array with a function
function getStudentInfo(students: any[]){
    // let students = [] do not need to declare the variable as it is in the param
    students.forEach(student => {
        console.log(`Hi I'm ${student.Name}, I speak ${student.LanguagesKnown} phone me on: ${student.Phone}`)    
    });
}
getStudentInfo(studentsInfo)

