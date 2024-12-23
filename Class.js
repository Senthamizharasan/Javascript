//class

class Students{

    constructor(name,age,year){
        this.name=name
        this.age=age
        this.year=year

    }

    det(){
        console.log(`the name is ${this.name} and the age is ${this.age} and the year is ${this.year}`);
        
    }
}

var details = new Students("hari", 15, 2009)
console.log(details);
details.det()


//Callback

function greet() {
    console.log("Good Morning");
    
    
}

function name(x) {
    console.log("Thamizh");
    x()
    
}
name(greet)