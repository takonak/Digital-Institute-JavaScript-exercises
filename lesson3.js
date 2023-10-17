// Task 1

var y = prompt("Please enter a number for Y");
var z = prompt("please enter a number for Z");

// 2*X – 3*Y + Z = 0;

var x = (3*y-z)/2;

var result = `X is equal to ${x}`
document.write(result);


// Task 2

  var a;
  var b;

  Math.hypot((a*a) + (b*b));
  var hypotenuse = Math.hypot;

  console.log(hypotenuse(3,4))


// task 3

function trianglePerimeter(a, b, c) {
  return a + b + c;
}
let sideA = 10;
let sideB = 12;
let sideC = 15;
let perimeter = trianglePerimeter(sideA, sideB, sideC);
console.log(`Triangle perimeter is ${perimeter}.`);

