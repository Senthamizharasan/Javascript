// class Employee1 {
//     constructor(name) {
//         this.name=name
//     }

//     display(){
//         console.log(`his name is ${this.name}`);
        
//     }
// }

// class Employee2 extends Employee1 {
//     constructor(age) {
//         super("Vikaram")
//         this.age=age
//     }

//     display2(){
//         console.log(`his name is ${this.age}`);
        
//     }
// }
// let Emp = new Employee2(20)
// Emp.display();
//Emp.display2();

//Exmple 2 mutiple inhertiance

class student1 {
    constructor(name,dept,age) {
        this.name=name
        this.dept=dept
        this.age=age
    }
}

class student2 extends student1 {
    constructor(name,dept,age,fees) {
        super(name,dept,age)
        this.fees=fees
    }
}

class student3 extends student2 {
    constructor(name,dept,age,fees,sports) {
        super(name,dept,age,fees)
        this.sports=sports
        
    }
}

let obj1 = new student2("Arun","BSC",20,9000)
let obj2 = new student3 ("Vikaram", "BCA",18,8000,"Cricket")

console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.dept);
console.log(obj1.fees);
console.log(obj2.name);
console.log(obj2.sports);

