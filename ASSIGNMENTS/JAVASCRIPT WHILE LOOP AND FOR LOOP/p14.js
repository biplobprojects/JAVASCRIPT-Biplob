//WAP TO PRINT THE FIBONACCI NUMBER SERIES UP TO A GIVEN NUMBER: (0 1 1 2 3 5 8 13 21)
const num = 100;
let x=0;
let y=1;
let fn= x+y;

console.log(x);
while(fn< num){

    console.log(fn);

    fn = x+y;
    x=y;
    y=fn;

}