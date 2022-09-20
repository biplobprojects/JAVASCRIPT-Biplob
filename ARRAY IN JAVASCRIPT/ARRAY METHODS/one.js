
var arrayData = [10,20,40,70,80];
 
//index0f()METHOD : TO FIND THE INDEX OF A SPECIFIED ELEMENT IN ARRAY:
console.log(arrayData.indexOf(70));

//PUSH()METHOD:TO ADD ELEMENTS TO THE END OF THE ARRAY:
arrayData.push(2);
arrayData.push(8);
console.log(arrayData);
let alength= arrayData.length; // TO FIND THE LENGTH OF THE ARRAY:
console.log(alength);

//POP()METHOD:TO REMOVE AND RETURN THE LAST ELEMENT OF AN ARRAY:
let aremove = arrayData.pop();
console.log(arrayData);
console.log(aremove);  //to return the last element :

//UNSHIFT():TO ADD NEW ELEMENTS IN THE FIRST POSITION:
arrayData.unshift(1);
arrayData.unshift(4);
console.log(arrayData);

//SHIFT()METHOD:TO REMOVE AND RETURN THE FIRST ELEMENT OF THE ARRAY:
let iremove2 = arrayData.shift();
console.log(arrayData);
console.log(iremove2);

//SLICE(): TO GET PART OF THE ARRAY AS SLICE:
console.log(arrayData.slice(2,4));




