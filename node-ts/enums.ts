// Enums add numeric values to an object
 enum List1 {Milk, Bread, Eggs}
 let eggs1 : List1 = List1.Eggs
 console.log(eggs1)
 enum List2 {Milk = 1, Bread = 2, Marmite= 5, Eggs}
 let eggs2 : List2 = List2.Eggs
 console.log(eggs2)
 enum List3 {Milk = 1, Bread, Eggs}
 let eggs3 : List3 = List3.Eggs
 console.log(eggs3)

// Udemy Karthik - defines a named numeric constant as an object - it is zero indexed
export enum LanguagesKnown {English, French, Italian, Spanish}
console.log("Logs the enum", LanguagesKnown)
console.log("Logs 3 in the enum:", LanguagesKnown[3])
