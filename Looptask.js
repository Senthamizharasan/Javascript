//* print the odd numbers between  20 to 30
for(var i=20; i<30; i++){
    if(i%2!==0){
console.log(i);
    }
        
}

 //Task 2: ["mango","apple","orange","Banana","Iceapple"] => loop the array

 let fruits = ["mango","apple","orange","Banana","Iceapple"]

 for(var i=0; i<fruits.length; i++){
    console.log(fruits[i]);
 }
 //Task3 - * Find the maximum number of an array [10,25,67,11,98].
 let num = [10,25,67,11,98]
 let max =num[0]
 for(var i=0; i<num.length; i++){
    if (num[i]>max ){
        max = num[i]
    }
    //console.log(max);

 }
 console.log(max);
 