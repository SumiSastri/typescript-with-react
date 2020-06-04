function getNumbers(...numbers:number[]){
    // let numbers = [] do not need to declare as it is in the param
    numbers.forEach(number =>{
        console.log(`Number: ${number}`)
    })   
}
getNumbers(1,2,3,4,5,6)
