//wap to print the least number in the given three numbers:

// var a = 12;
// var b =78;
// var c=65;

// if ( a<b && a<c){
//     console.log(a);
// }
// else if (b<a && b<c){
//     console.log(b);
// }

// else{
//     console.log(c);
// }

//BY USING Math.min()method:
var a = 45;
var b =43;
var c =9;
var x = Math.min(a,b,c);

console.log(`${a},${b}, ${c}: Smallest=${x}`);