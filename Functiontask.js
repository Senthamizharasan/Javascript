//1. Functions : 

 //*Reverse the String inside the function => "Trendnologies". => x  
 //* iterate 0 to 10 even numbers inside the function. => loop
 //// var str = "java"
// var store = ""
// for(var i=0; i<str.length; i++){
//     store += str[i] //java + = a
// console.log(store);
// }
// console.log(store);
// var str = "java"
// for(var i=str.length-1; i>=0; i--){
//      console.log(str[i]);
    
// }

 function reversestr(str){
    let store =""
    for(var i=str.length-1;i>=0;i--){
        store += str[i]
    }
    console.log(store)
    }
    reversestr("Trendnologies");

//Task 2 - iterate 0 to 10 even numbers inside the function. => loop

function even(num){
for(var i=0; i<num.length; i++)
        {
        if(num[i]%2===0){
console.log(num[i]);
    }
   }
}
even([0,1,2,3,4,5,6,7,8,9,10]);
