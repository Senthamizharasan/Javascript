// var id = {
//     Name: "Arun",
//     STD: "I STD",
//     Age: 5,
//     Blood_Group: "A+ve",
//     Contact_no: "+91-1234567890",
//     Addrss: "Chennai"
// }

// console.log(id.Name);
// console.log(id.STD);

// // update values
// id.Name = "Gopal"
// console.log(id);


// //
// var keys = Object.keys(id)
// console.log(keys);
// var value = Object.values(id)
//console.log(value);

// var obj = [{
//     Name: "Arun",
//     STD: "I STD",
//     Age: 5,
// },
// {
//     Name: "Kumar",
//     STD: "V STD",
//     Age: 10,
// },
// {
//     Name: "Poja",
//     STD: "I STD",
//     Age: 5,
// },
// ]
// //console.log(obj[1].STD);

// obj[2].Name = "Sathish"
// console.log(obj[2]);

//oject destructing 
// var id1 = {
//     Name: "Arun",
//     STD: "I STD",
//     Age: 5,
    
// }
// let {Name,STD, Age} = id1
// console.log(Name, Age);
// console.log(STD);

//Task object : [object destructing] get 3rd index value

var obj1 = [{
    Name: "Arun",
    STD: "I STD",
    Age: 5
},
{
    Name: "Kumar",
    STD: "V STD",
    Age: 10
},
{
    Name: "Poja",
    STD: "I STD",
    Age: 5
}
]
let obj2 = obj1[2]
console.log(obj2);
