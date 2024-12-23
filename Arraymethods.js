//Array methods
//push: 
var billcount = ["Hari","Arun","Kali"]
billcount.push("Sabri","Logan")
console.log(billcount);

//Pop

billcount.pop()
console.log(billcount);

//unshift
var a = ["Hari","Arun","Kali"]
a.unshift("Sabri","Logan")
console.log(a);

//shift

a.shift()
console.log(a);

//concat
var fruits = ["Apple", "Pineapple", "Iceapple"]
var veg = ["Potato", "tomoto", "Cucumber"]
var cosmetic = ["Powder", "Denver"]

var cover = fruits.concat(veg,cosmetic)
console.log(cover);

//Sort in assceding

var num = [9,2,5,6,1,0,4,3,7,8,10]
num.sort((a,b)=>a-b);
console.log(num);

//Sort in dessending
var num = [9,2,5,6,1,0,4,3,7,8,10]
num.sort((a,b)=>b-a);
console.log(num);

//Sort string in assceding

var city = ["Nepal","india","america","Belgium"]//ASCII - American standard code for information interchange
city.sort()
console.log(city);

//Split
// split converts string into array
var s = "Good Morning"
var spl = s.split(" ")
console.log(spl);

//Join
//Join converts array into string

var j = spl.join("")
console.log(j);

//reverse
let n = "javascript"
var rev = n.split("").reverse().join("")
console.log(rev);

//slice
const birds =["peacock","pigeon","parrot","eagle","ostritich"]
const slice = birds.slice(2,-1)
console.log(slice);

//Splice
//Syntax
//variblename.splice(index,counter[0,1], value)
//0 = push and update
//1 = override

let weeks =["sunday","monday","tuesday","thursday","saturday"]
    weeks.splice(3,0,"wednesday")
    weeks.splice(5,1,"friday")
console.log(weeks);

//include
var inc="javascript"
var inc1 =inc.includes("java")
console.log(inc1);

//touppercase
 let up = "annanagar"
 console.log(up.toUpperCase());

 //tolowercase
 let low = "CHENNAI"
 console.log(low.toLowerCase());
 
 //indexof
 var idx = "annanagar"
 console.log(idx.indexOf("a"))

 //lastindexof
 var laidx = "annanagar"
 console.log(laidx.lastIndexOf("a"))