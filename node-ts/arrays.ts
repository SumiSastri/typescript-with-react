// Arrays  2 ways of declaring the type
let listNumbers: number[] = [3,4,5]
console.log(listNumbers)
let list: Array <number> = [1,2,3]
console.log(list)

let listNames: string[] = ['Ravi', 'Ravinder', 'Ravindernath']
console.log(listNames)
let listNames2:Array<string> = ['Bhavana', 'Bhavya', 'Bhavani']
console.log(listNames2)

let checkBig: boolean[] = [true, false, true]
console.log(checkBig)

// mixed types
let listMixedTypes: any [] = [true, 1, "Mixed-Array"]
console.log (listMixedTypes)
let listMixedTypes2: Array<any> = [false, 2, "Mixed-Up-Array"]
console.log (listMixedTypes2)