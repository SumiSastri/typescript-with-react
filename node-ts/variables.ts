// Inferred type of a is number
    var a = 10
    // var a = "ninja" you can reassign value but not type - this produces an error
    var b = 2

    if (a === 1){
        var a = 123
        let b = 456
        console.log(a)
        console.log (b)
    }
    console.log(a)
    console.log (b)

//  block scoped let and const cant be redeclared, typescript version 3 also throws errors with var

    var x:number = 10
    // var x:string = "Ninja" - can not reassign the type explicitly 
    console.log(x)

    let y = 20
    console.log(y)

//  consts have to be initialised
    // const z; does not work
    const z = 2 
    console.log(z)

//  lets can be reassigned values
x = y + x;
console.log(x)

y= x*y;
console.log(y)

// consts can not have values reassigned
// const z = x+y
// console.log(z)

// hoisting of variables
function greetSoldier(name: string){  
        if (name === "Napoleon"){
            greet = "Hello General Bonaparte";
        } else {
            greet = "Name and rank soldier";
        }
        var greet;
        console.log(greet);
        // var is hoisted and has functional scope 
    }
    greetSoldier("Napoleon")
    greetSoldier("Bananrama")
    
    function greetPerson(name: string){
            if (name === "Josephine"){
                var greet = "Good Morning Miss Josephine";
            } else {
                var greet = "Good Morning M'lady";
            }
            console.log(greet);
        }
        greetPerson("Josephine")
        greetPerson("Joanna")
    
    // block scope variable greet not hoisted, code executes with errors
    // function greetTeacher(name: string){
    //         if (name === "Guru"){
    //             let greet = "Good Morning Guruji";
    //         } else {
    //             let greet = "Good Morning Teacher";
    //         }     
    //         console.log(greet);
    //     }
    //     greetTeacher("Josephine")
    //     greetTeacher("Joanna")  
        
    // function greetTeacher(name: string){
    //         if (name === "Guru"){
    //             greet = "Good Morning Guruji";
    //         } else {
    //             greet = "Good Morning Teacher";
    //         }
    //         let greet;     
    //         console.log(greet);
    //     }
    //     greetTeacher("Josephine")
    //     greetTeacher("Joanna") 
    
        function greetGuru(name: string){
            let greet;
            // let needs to be hoisted but is transpiled as var in the js 
            if (name === "Guru"){
                greet = "Good Morning Guruji";
            } else {
                greet = "Good Morning Teacher";
            }
            console.log(greet);
        }
        greetGuru("Guru")
        greetGuru("Nanak")

        //  lets see this with a number

        let number: number = 5        
        function multiply(number:number){
            return number * 5
        }
        console.log(multiply(10),`logs 10 multiplies it by 5 not the variable value of 5 as it is out of scope`)

 
        function multiplyNewNumber(number1:number){
            number1 = 5
            return number1 * 5
        }
        console.log(multiplyNewNumber(2),`logs new function but variable value of 2 not updated as out of scope`)

        