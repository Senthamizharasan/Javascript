//forEach -To read the Array
//Syntax
//var_name.forEach((value, index, actualarrya)=>)

    var week =["sunday","monday","tuesday","thursday","saturday"]
    week.forEach((val,idx,accarr)=>console.log(val,idx,accarr)
    )

//forin - to loop or read the object

//Syntax = for(var_type var_name in obj_name){}

var obj ={
    name :"Kalai",
    age : 12
}

for(let x in obj){
    console.log(obj[x])
    console.log(x+"<=>"+obj[x])
}

//for of - to loop the string

//syntax = for(var_type var_name of str_name){}

let str = "javascript"

for (let y of str){
    console.log(y);
    
}

//Map
//syntax = var_name.map((value,idx,accarr)=>)

var number = [1,2,3,4,5,6,7,8,9,10]
var op = number.map((value,idx,accrr)=>accrr*2)
console.log(op);


//Filter
//Syntax = var_name.filter((value,idx,accarr)=>)

var fill = number.filter((val,idx,accarr)=>val%2==0)
console.log(fill)

//reduce
//Syntax = var_name.reduce ((acumulator, value, index, accarr)=>)

var red = number.reduce((acc,val,idx,accarr)=>acc+val,5)
console.log(red);
