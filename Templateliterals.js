//Template literals or string literals ~${}~

var a = "Thamzih"
var b = "how are you"
console.log(`hi ${a} 
    ${b} 
    how may i help you`);

//this:
var obj = {

    name : "thamizh",
    age : 12,
    details: function(){
        console.log(this.age);
        
    }
}
console.log(obj);
obj.details()

//setTimeout fucntion

// //synatx
// setTimeout(() => {
    
// }, timeout);

// setTimeout(() => {
//    console.log("Bomb blast");
    
// }, 3000);

//Constructor
function Car(name,modle,year) {
    this.carname = name
    this.caryear = year
    this.carmodel = modle
    this.details = function () {
 console.log(`Car Name is ${name} modle is ${modle} make is ${year}`);
        
    } 
}

let det = new Car("Honda","XUV",2020)
console.log(det);
det.details()
let det1 = new Car("BMW","XL6",2021)
console.log(det1);
det1.details()
