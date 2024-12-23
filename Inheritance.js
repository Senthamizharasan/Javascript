const { log } = require("console")

//inheritance allows a new class to inherit an existing class
class Addition {
    add() {
       console.log("Addition");
        
    }
} 

class Subraction extends Addition {
    sub(){
        console.log("Subraction");
        
    }
}
let math = new Subraction()
math.add()
math.sub()