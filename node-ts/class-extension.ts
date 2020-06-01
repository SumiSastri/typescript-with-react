class Teacher {
    name: string
    constructor(name: string){
        this.name = name
    }
    greet(){
        console.log(`Good morning ${this.name} is logged from Teacher class`)
    }
}
let person = new Teacher('Mrs. Petrus')
console.log(person)
console.log(person.greet())

// class extension inherits all the props and methods of the Teacher class
class Highschoolteacher extends Teacher {
    greet(){ 
        console.log(`Good afternoon ${this.name} is logged from HighSchoolteacher class`)
        super.greet()

    }
}
// instantiate or create a new instance of the extended class
let person1 = new Highschoolteacher("Mrs. Rebello")
console.log(person1)
console.log(person1.greet())
// the function CAN be overwritten as in the extended class
// note how the super calls the method from the Teacher class

class Student {
    Languages: any
    Name: any
    Phone: any
    // private fN = fN
    // private lN = lN
    constructor (private fN:string, private lN:string){
    }
    getFullName(){
        console.log(`logs ${this.fN} ${this.lN}`)
    }
}

let s1 = new Student("Kisha", "Moorthy")
