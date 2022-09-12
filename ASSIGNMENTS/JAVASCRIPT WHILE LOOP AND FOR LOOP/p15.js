//WAP TO CHECK IF A NUMBER IS ARMSTRONG NUMBER OR NOT:
//CHECKING ARMSTRONG NUMBER OF THREE DIGITS:
// let sum = 0;
// const number = prompt('enter a three digit number:');

// //CREATE A TEMPORARY VARIABLE:
// let temp = number;
// while (temp > 0) {

//     //FINDING THE ONES DIGIT:
//     let remainder = temp % 10;

//     sum += remainder ** 3; //or (remainder * remainder * remainder:)

//     //REMOVING LAST DIGIT FROM THE NUMBER:
//     temp = parseInt(temp / 10); //(parseInt to convert float into integer:)


// }
// //CHECK THE CONDITION:
// if (sum == number) {
//     console.log(`${number} is an ARMSTRONG NUMBER`);

// }
// else {
//     console.log(`${number} is an not an ARMSTRONG NUMBER`);

// }


// 2. TO CHECK ARMSTRONG NUMBER OF N DIGITS:
let sum = 0;
const number = prompt('enter a three digit number:');

//CREATE A TEMPORARY VARIABLE:
let temp = number;
let noOfDigits=  number.toString().length;
while (temp > 0) {

    //FINDING THE ONES DIGIT:
    let remainder = temp % 10;

    sum += remainder ** noOfDigits; //or (remainder * remainder * remainder:)

    //REMOVING LAST DIGIT FROM THE NUMBER:
    temp = parseInt(temp / 10); //(parseInt to convert float into integer:)


}
//CHECK THE CONDITION:
if (sum == number) {
    console.log(`${number} is an ARMSTRONG NUMBER`);

}
else {
    console.log(`${number} is an not an ARMSTRONG NUMBER`);

}

