// console.log("ankit");

// // function defination
// function sayMyName(){
//     console.log("Ankit Gupta")
// }

// function use - function call
// sayMyName();

// function printCounting(){
//     for(let i = 1; i <= 100; i++){
//         console.log(i);
//     }
// }

// printCounting();

// function printNumber(num){
//     console.log("Printing Number : ", num)
// }
// printNumber(2);

// function getAverage(num1, num2){
//     let avg = (num1 + num2 )/ 2;
//     console.log("Average : ", avg);
// }
// getAverage(1,1);

// retun function
// function getSum(a, b, c){
//     let sum = a + b + c;
//     return sum;
// }

// let ans = getSum(1, 2, 3);
// console.log(ans);

function getMyName(firstName, lastName){
    let fullName = firstName + lastName;
    return fullName;
}

let fullName = getMyName("Ankit ", "Gupta");
console.log(fullName);