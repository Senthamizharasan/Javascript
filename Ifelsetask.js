//Task1 
//Check if the number is odd or even and if it is zero print o/p : Zero.
let num = 20
let num1 = num%2

if(num1==0){
    console.log("The number is Even");
    } else{console.log("The number is Odd");
    }

    //Task2
//     * Print the following messages based on the time:

// If the time is between 9:05 a.m. and 10:05 a.m., print 'Madurai and Thanjavur buses will depart.'
// If the time is between 12:10 p.m. and 1:10 p.m., print 'Bangalore and Mysore buses will depart.'
// If the time is between 3:00 p.m. and 4:00 p.m., print 'Pondicherry or Cuddalore buses will depart.'
// For any other time, print 'Local buses will depart'.

let time = 9.00
if (time>=9.05&& time <=10.05){
    console.log("Madurai and Thanjavur buses will depart.");
}else if (time>=12.10&& time <=1.10){
    console.log("Bangalore and Mysore buses will depart.");
}else if (time>=3.00&& time <=4.00){
    console.log("Pondicherry or Cuddalore buses will depart.");
}else{
    console.log("Local buses will depart.");
}