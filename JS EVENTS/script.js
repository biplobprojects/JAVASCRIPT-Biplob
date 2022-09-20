function A (){
    alert("hello biplob")
}

 document.getElementById('abc').innerHTML="java developer"
// console.log(tagRef);


document.getElementById('bc').innerHTML="adrenaline"

document.getElementById("rajni").innerHTML= new Date()  //TO PRINT THE DATE:

// JAVASCRIPT EVENTS:
//1. MOUSE EVENTS:

function mouseOver(){   //MOUSE OVER:
    document.getElementById('mouseOver1').style.backgroundColor = "blue"
}

function mouseOut(){   //MOUSE OUT:
    document.getElementById('MO').style.backgroundColor = "black"

}

function Click(){    //ONCLICK:
    document.getElementById('OC').style.backgroundColor = "grey"

}

//2.FORM EVENTS:

function Focus1(){    //ON FOCUS:
    document.getElementById('ONFOCUS').style.backgroundColor = "orange"
}

function BLUR1(){    //ON BLUR:
  let tag =  document.getElementById('ONBLUR')

  document.getElementById('ONBLUR').value = tag.value.toUpperCase()

}





