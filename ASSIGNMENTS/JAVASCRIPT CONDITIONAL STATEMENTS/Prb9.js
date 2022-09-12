//wap to print greatest no.in given 3 numbers:

var a  =45;
var b=67;
var c=34;

// if( a>b && a>c){
//     console.log(a);
// }
// else if (b>c && b>a){
//     console.log(b);
// }

// else{
//     console.log(c);
// }



//USING Math.max() method:

var a= prompt("please enter the first number");
var b =prompt("enter the second numebr");
var c =prompt("enter the third number");
var x = Math.max(a,b,c);
console.log(`${a},${b},${c}: Largest= ${x}`);