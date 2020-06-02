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
    Age: number,
    Sex: string,
    Phone: number,
    Email: string,
    Languages: string
}
// Edureka tutorial @50:00
interface IEmployee extends IPerson{
    grade: number
    currency: string
    salary: number
    getSalary: (grade: number, currency: string, salary:number,)=> string| number
}
export {IPerson, IPersonJuniorSchool as TeacherJrSchool, IStudent, IEmployee}

