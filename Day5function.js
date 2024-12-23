// var height = 150
// let height_limit = (height>=140||height<=180)?"he is elligble to Ride":"he is not elligble to Ride"
// console.log(height_limit);

//Task 1
function height(x){
    return x>=140&&x<=180 ? "he is elligble to Ride":"he is not elligble to Ride"
}
console.log(height(150));
console.log(height(120));

//Task 2 - Arrow function for square of value using single parameter and arguments

let square = (a)=>{
    return a*a
}
console.log(square(2));
