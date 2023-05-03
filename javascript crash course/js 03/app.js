// let usernum =prompt("Enter your fav no")
// console.log(+usernum + 5)


//comparison opreator
// ==, ===

// console.log(5 == 5) check value only
// console.log ( 5 === '5' ) check value with data type
// != , !==
// console.log (5 != 5 ) not eqaul value
// console.log (5 !== 5 ) not eqaul with type
// < ,>  graterthan lessthan


// let num = 9;
// let num2 = 8;

// console.log(num < num2)
// <= , >=
// let userAge = 19;
// console.log(userAge >= 18 );

// let userAge = +prompt("Enter your age")

// if (userAge >= 18) {
//     console.log("you are adult");
// }else{
//     console.log("you are chisld")
// }

let usreNum = prompt("Enter a Number");
let computerNum = Math.round(Math.random() * 10);

if (usreNum === computerNum) {
    console.log("you are win");
}else{
    console.log("you are lost " + computerNum);
}