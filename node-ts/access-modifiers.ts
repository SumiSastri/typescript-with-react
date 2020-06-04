//  Default public
//  Private can not be accessed outside the parent/base class - errors thrown
//  Protected allows access

class Car {
    public carName: string;
    // uncomment and see errors
    private numberPlate: number 
    // numberPlate: number
    protected mark: number
    constructor(carName: string, numberPlate: number, mark: number){
        this.carName = carName
        this.numberPlate = numberPlate
        this.mark = mark
        console.log(`Car name and plate   ${this.carName} ${this.numberPlate} ${this.mark}`)
    }
    getTopSpeed(mph:number){
        return`${this.carName}top speed is ${mph}miles/hr`
    }
    getMark(mark:number){
        return `${this.carName}${this.numberPlate} released as Mark${mark}`
    }
}

let car1 = new Car("Mazda", 241, 5)
console.log(car1)
console.log(car1.getTopSpeed(150))
console.log(car1.getMark(2))

class SportsCar extends Car {
    constructor(carName: string, numberPlate: number, mark: number){
        super(carName, numberPlate, mark)
    }
}

let sportscar1 = new SportsCar ("Ferrari", 500, 2)
console.log(sportscar1)
console.log(sportscar1.getTopSpeed(200))
console.log(sportscar1.getMark(5))
