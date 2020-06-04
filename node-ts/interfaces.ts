interface IPerson {
    id: number
    firstName: string
    lastName: string
}
let person: IPerson = {id:10, firstName:"Joan", lastName:"Hicks"}
console.log(person)

interface IPersonJuniorSchool extends IPerson {
    subject: string
    timeTable: Array<number>
}
interface IStudent extends IPerson{
    age: number,
    sex: string,
    phone: number,
    email: string,
    languages: string
}
// Edureka tutorial @43:00 Interfaces and classes
interface IEmployee extends IPerson{
    grade: number
    currency: string
    salary: number
    getSalary: (grade: number, currency: string, salary:number,)=> string| number
}
export {IPerson, IPersonJuniorSchool as TeacherJrSchool, IStudent, IEmployee}

