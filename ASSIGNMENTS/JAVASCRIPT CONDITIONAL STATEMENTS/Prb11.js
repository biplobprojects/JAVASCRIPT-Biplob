//wap to print given three numbers in ascending orders:

let numbers=[45,78,23,4,54,120];
// numbers.sort();                   //THE NUMBERS ARE SORT BY THEIR ASCII CHARACTER ORDER:
// console.log(numbers);

numbers.sort(function(x,y){
    return x-y;
})
console.log(numbers);




 
