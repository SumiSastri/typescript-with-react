import { red } from "color-name";

export {}
// Test configuration
let message="hellow and welcome back"
console.log(message);

// Primitive type examples
    let name: string = "Rehana";
    let student: boolean = false;
    let teacher: boolean = true;

    let templateStringSentence: string = ` My name is ${name}. Am I am a student or a teacher? Student? ${student} Teacher?${teacher}`;
    console.log(templateStringSentence);


    let fullName: string = `Jhanavi Basappa`;
    let age: number = 16;
    let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;
    console.log(sentence)

// Arrays
let list: Array <number> = [1,2,3]
let listNumbers: number[] = [3,4,5]
console.log(list)
console.log(listNumbers)

let listNames: string[] = ['Ravi', 'Ravinder', 'Ravindernath']
console.log(listNames)

let checkBig: boolean[] = [true, false, true]
console.log(checkBig)

// Tuple

let shoppingList: [number,string] =[ 1, 'milk']
console.log(shoppingList)


// Enum

 enum List1 {Milk, Bread, Eggs}
 let eggs1 : List1 = List1.Eggs
 console.log(eggs1)
 enum List2 {Milk = 1, Bread = 2, Marmite= 5, Eggs}
 let eggs2 : List2 = List2.Eggs
 console.log(eggs2)
 enum List3 {Milk = 1, Bread, Eggs}
 let eggs3 : List3 = List3.Eggs
 console.log(eggs3)

