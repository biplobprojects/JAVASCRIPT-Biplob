

//PARAMETERS WITH DEFAULT VALUE:
function add(a, b = 4) {  //HERE THE DEFAULT VALUE IS 4 SO IF NO VALUE IN ADD IS CALLED THEN B=4 WILL BE EXECUTED:
    console.log(a + b);
}
add(15);


// RETURN KEYWORD:

//  EXAMPLE - 1:
function add(a, b) {
    return a + b + 100;
}
let r1 = add(10, 20);
console.log(r1);

// EXAMPLE -2:
function cal_Age(year) {
    return 2022 - year;
}

let age1 = cal_Age(1991);
console.log(age1);

let age2 = cal_Age(1999);
console.log(age2);

