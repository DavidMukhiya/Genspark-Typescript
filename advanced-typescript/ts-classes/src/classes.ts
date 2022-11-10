class Car{
    make
    year
    color
    constructor(make:string, year:number, color:string){
        this.make = make
        this.year = year
        this.color = color
    }
}
let car = new Car("Honda", 2021, "Red");
console.log(car);