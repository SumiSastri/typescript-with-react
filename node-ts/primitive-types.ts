import { red } from "color-name";

// Primitive types are strings, numbers, booleans
    let name: string = "Rehana";
    let student: boolean = false;
    let teacher: boolean = true;

    let templateStringSentence: string = ` My name is ${name}. Am I am a student or a teacher? Student? ${student} Teacher?${teacher}`;
    console.log(templateStringSentence);
    let fullName: string = `Jhanavi Basappa`;
    let age: number = 16;
    let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old next month.`;
    console.log(`logs sentence, ${sentence}`)
    console.log(`logs string length, ${sentence.length}`)
    console.log(`logs string concat, ${templateStringSentence} & ${sentence}`)

let num1: number = 10
let num2: number = 20
let result: number = 0

// assignment operators
result = num1
console.log(`logs simple assignment`,result)
result = num1 += num2
console.log(`logs += assignment`,result)
result = num1 -= num2
console.log(`logs -= assignment`,result)
result = num1 /= num2
console.log(`logs /= assignment`,result)
result = num1 *= num2
console.log(`logs *= assignment`,result)

// arithmetic operators - examples from Edureka tutorial
result = num1+ num2
console.log(`logs addition`,result)
result = num1 - num2
console.log(`logs subtraction`,result)
result = num1 * num2
console.log(`logs multiplication`,result)
result = num1 / num2
console.log(`logs division`,result)
result = num1 % num2
console.log(`logs quotient`,result)

// logical operators
let average: number = 10
let percentage: number = 20
// Bit representation is how many bits in this variable
let answer: boolean | undefined = true

answer = (average<50) && (percentage>50)
console.log(`logs logic with And operator`, answer)
answer = (average<50) || (percentage>50)
console.log(`logs logic with Or operator`, answer)
// note the difference with the and and not operators
answer = (average<50) != (percentage>50)
console.log(`logs logic with Not operator`, answer)
answer = (average<50) != (percentage<50)
console.log(`logs logic with Not operator`, answer)
// note that both average and percentage are euqal to 50 so when they actually are equal you get false as the answer

// bitwise operators
let bitwiseResult: any 
bitwiseResult = (average & percentage)
console.log(`logs bitwise with And operator`, bitwiseResult)
bitwiseResult = (average | percentage)
console.log(`logs bitwise with Or operator`, bitwiseResult)
// bitwiseResult = (average ~ percentage)
// console.log(`logs bitwise with Not operator`, bitwiseResult)