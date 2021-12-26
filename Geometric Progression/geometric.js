
var a = prompt("Enter the starting number");
a = parseInt(a);
var r = prompt("Enter the comman ratio");
r = parseInt(r);
var n = prompt("Enter the nth number");
n = parseInt(n);

var gp = a * Math.floor(Math.pow(r, n - 1));

alert("The " + n + "th term in the GP is: " + gp);