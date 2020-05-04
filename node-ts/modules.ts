// interface StudentInfo{
//     Name: String,
//     Age: Number
// }
// export {StudentInfo}
// <!-- Or as an alias 
// export {StudentInfo as HighSchoolStudents}
// -->
// ```
// When it is imported, the file can be used in a new instance of the interface of the class component, make sure the right type is being used in the imported file.

// ```
// import {StudentInfo} from <'filepath'>

// <!-- Importing the alias
// import {HighSchoolStudents} from <'filepath'>
//  -->

// let student: StudentInfo ={
// <!-- with the alias 
// let student: HighSchoolStudents{ 
//     -->
//     Name: "Rasheed",
//     Age: 21
// }
// ```
// Default exports are different as you can only have one default export per module so when you export a file you use the export default key word with the module you want to export. 

// ```
// export default class Car {
//     constructor (private make, private model){}
//     getMakeAndModel (): string| number{
//         return this._carMake.toString() + " " + this._carModel.toString()
//     }
// }
// ```
// When you import it you do not need the curly braces, because it is implicit that this is exactly the same name of the file you have exported. If you do not have the curly braces you can also change he import

// ```
// import Car from <'filepath'>
// <!-- import CarMakesAndModels from <'filepath'> -->
// <!-- let car = new CarMakesAndModels () -->
// let car = new Car ('BMW', 300)
// console.log(car.getMakeAndModel())
// ```