interface IPerson {
    id: number
    firstName: string
    lastName: string
}
let teacher10: IPerson = {id:10, firstName:"Joan", lastName:"Hicks"}
console.log(teacher10)

interface IPersonJuniorSchool extends IPerson {
    subject: string
    timeTable: Array<number>
}
interface IStudent extends IPerson{
    Name: any
    Age: number,
    Sex: string,
    Phone: number,
    Email: string,
    Languages: string
}

export {IPerson, IPersonJuniorSchool, IStudent}

