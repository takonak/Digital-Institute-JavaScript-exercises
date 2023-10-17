// Task 1


var userAge = prompt("Please enter your age");

if (userAge >= 18){
    var fullName = prompt("Please enter your fullname");
    console.log ("Hello", fullName);
}else{
    console.log ("You are under age!")
}



// Task 2
var counter = 0;

var questionOne = prompt("Which email service is owned by Microsoft? a: Hotmail b: gmail c:Outlook");
var questionTwo = prompt("Google Chrome, Safari, Firefox, and Explorer are different types of what? a:web Applications  b:Web browsers c:Outlook");
var questionThree = prompt ("What’s the shortcut for the “copy” function on most computers? a: ctrl s b:ctrl v c:ctrl c");

if(questionOne == "a" ){
    counter++;
}else{
    console.log("The answer was: Hotmail")
}

if(questionTwo == "b" ){
    counter++;
}else{
    console.log("The answer was: web browsers")
}

if(questionThree == "c" ){
    counter++;
}else{
    console.log("The answer was: ctrl c")
}

console.log("Total score:",counter)



// task 3

var number1 = document.getElementById("input1");
var number2 = document.getElementById("input2");
var resultelement = document.getElementById("result");
var element1 = document.getElementById("input3");
var element2 = document.getElementById("input4");
var headerelement = document.getElementById("header");


function mouseover(element)
{
    element.style.color="red";
}

function mouseout(element){
    element.style.color="black";
}


function calc(){
    var number1 = parseFloat(document.getElementById("input1").value);
    var number2 = parseFloat(document.getElementById("input2").value);
    var operator= document.getElementById("operator").value;
    var resultelement = document.getElementById("result");


    if(operator === "+"){
        document.getElementById("result").value = number1+number2;
    }
    if(operator === "-"){
        document.getElementById("result").value = number1-number2;
    }
    if(operator === "*"){
        document.getElementById("result").value = number1*number2;
    }
    if(operator === "/"){
        document.getElementById("result").value = number1/number2;
    }else{
        console.log("fill the gap")
    }
}

function myfunction(){
    if(number1.value === ""){
        number1.style.border = "2px solid red";
        resultelement.value = "";
    }else{
        number1.style.border = "2px solid black";
    }{

    }
    if(number2.value === ""){
        number2.style.border = "2px solid red";
        resultelement.value = "";
    }else{
        number2.style.border = "2px solid black";
    }
    if(number1.value === "" && number2.value === ""){
        number1.style.border = "2px solid black";
        number2.style.border = "2px solid black";
    }
    
}
