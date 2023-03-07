// this is a note about JS class from W3C 

//basic format for class constructor

// class ClassName {
//     constructor() {
//         ...ClassName.
//     }
// }

// class Car{
//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }
// }

// let car1 = new Car("ford", 2014)
// let car2 = new Car("audi", 2019)

// console.log("the name of car 1 is" + car1.name)

class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        let data = new Date()
        return data.getFullYear() - this.year
    }
    introduce(){
        console.log("car name" + this.name)
        console.log("car age is " + this.age())
    }
}

let car3 = new Car("ford", 2014)
car3.introduce()