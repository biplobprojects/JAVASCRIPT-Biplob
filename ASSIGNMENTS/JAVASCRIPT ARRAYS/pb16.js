//HOW TO COPY DATA FROM ARRAY IN JAVASCRIPT:

//BY USING SLICE()METHOD:

let Arrays1=[12,45,65,67,76];

let copyArray1 = Arrays1.slice(); //SLICE:
console.log(Arrays1);
console.log(copyArray1);

//BY USING ES6 SPREAD OPERATOR(...):

let copyanotherarray = [...Arrays1]; //ES6:
console.log(copyanotherarray);