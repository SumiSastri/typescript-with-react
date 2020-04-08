 // reassignment with var and let, as let is block scoped its value will not be reassigned
    var a = 1
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

    var x = 10
    // var x = "Ninja"
    console.log(x)

    let y = 20
    // let y = "Ninja"
    console.log(y)

//  consts have to be initialised
    // const z; does not work
    const z = 2 
    // const z = "Ninja"
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
    // var is hoisted and has functional scope
        if (name === "Napoleon"){
            greet = "Hello General Bonaparte";
        } else {
            greet = "Name and rank soldier";
        }
        var greet;
        console.log(greet);
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
    
    // let needs to be hoisted but is transpiled as var in the js 
    
        function greetGuru(name: string){
            let greet;
            if (name === "Guru"){
                greet = "Good Morning Guruji";
            } else {
                greet = "Good Morning Teacher";
            }
            console.log(greet);
        }
        greetGuru("Guru")
        greetGuru("Nanak")