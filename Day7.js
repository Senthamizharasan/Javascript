// Loops
// for Loop
// while loop
// do while loop

//For Loop
//Syntax: for(initialization; condition, iteration[increment/decrement]){
//}

// for (var i =0; i<5; i++){
//     console.log(i)
// }

// for (var i =5; i>0; i--){
//     console.log(i)
// }

//Steps:

//Step 1: i=0=>[0<5][true]=>print: 0 => 0++ => 0+1 = 1
//Step 2: i=1=>[1<5][true]=>print: 1 => 1++ => 1+1 = 2
//Step 3: i=2=>[2<5][true]=>print: 2 => 2++ => 2+1 = 3
//Step 4: i=3=>[3<5][true]=>print: 3 => 3++ => 3+1 = 4
//Step 5: i=4=>[4<5][true]=>print: 4 => 4++ => 4+1 = 5
//Step 6: i=5=>[5<5][false]=>print: 0 => loop will stop

// var str = "java"
// for(var i=0; i<str.length; i++){
//     console.log(str[i]);
    
// }

//Task - reverse the string

 var str = "java"
for(var i=str.length-1; i>=0; i--){
     console.log(str[i]);
    
}