
var a = prompt("Enter the starting number");
a = parseInt(a);
var d = prompt("Enter the difference");
d = parseInt(d);
var n = prompt("Enter the nth number");
n = parseInt(n);

var ap = a + (n - 1) *d;

alert("The " + n + " th term in the AP is: " + ap);