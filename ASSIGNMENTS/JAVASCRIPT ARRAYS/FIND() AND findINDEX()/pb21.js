//ARRAY FIND METHOD:

 var A= [12,45,65,43,12];

  var found =A.find(checkAdult);
  console.log(found);

  function checkAdult(age){
    return age>=60;
  }
  console.log(checkAdult);

  //ARRAY FINDINDEX()METHOD:
  var found =A.findIndex(checkAdult);
  console.log(found);

  function checkAdult(age){
    return age>=60;
  }
  console.log(checkAdult);



