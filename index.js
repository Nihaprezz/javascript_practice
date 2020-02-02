console.log('connected')

//ES6 Spread operator
const sum = (...args) => {
    console.log(...args)
    return args.reduce((a, b) => a + b, 0);
  }

console.log(sum(1, 2, 3)); // 6
  

//ES6 Class constructors
class Car {
    constructor(targetCar){
        this.targetCar = targetCar
    }
}

const toyota = new Car('toyota');
console.log(toyota.targetCar)