class Professor {
    id: number
    firstName: string
    lastName: string
    grade: number
    salary: number
    constructor(id: number, firstName: string, lastName: string, grade: number, salary:number){
        this.id = id,
        this.firstName = firstName,
        this.lastName = lastName,
        this.grade = grade,
        this.salary = salary
    }
     getSalary(){
         return `${this.id}) ${this.firstName} ${this.lastName} gross annual salary is ${(this.grade * this.salary)*12}`
     }
} 

let prof1 = new Professor (1, "Fred", "Kapner", 8, 5000)
console.log(prof1)
console.log(`logs prof1 salary, ${prof1.getSalary()}`)

//  Look at the boiler plate code in the js file that intantiates the class
//  Look at the extended class and how this is called in the super to reference the parent class
class Lecturer extends Professor{
    constructor(id: number, firstName: string, lastName: string, grade: number, salary:number){
        // super calls on the parent class properties and methods as params
        super(id, firstName, lastName, grade, salary)       
        }
        // bespoke methods can be written after super called
    salarySacrifice(){
        return `Lect. ${this.id}) ${this.firstName} ${this.lastName} sacrifices ${((this.grade * this.salary)*10/100)*12} of his salary for his pension`
    }    
    }
    // The lecturer class inherits all the properties and methods of the parent class
    let lect1 = new Lecturer (1, "Paul", "Krugman", 9, 6000)
    console.log(lect1)
    console.log(`logs lect1 salary, ${lect1.getSalary()}`)
    console.log(lect1.salarySacrifice())