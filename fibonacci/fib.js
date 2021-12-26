var n = prompt("Enter the number:");
n = parseInt(n);

var a = 0;
var b = 1;
var s;

for(var i = 2 ; i < n; i++)
{
	s = a + b;
	a = b;
	b = s;
}

alert("The "+ n +"th Fibonacci number is: " + b);