let out = document.getElementById("out")
let expression = "";

function appendDigit(digit) {
	expression += digit;
	out.value = expression;
}

function appendOperator(operator) {
	expression += operator;
	out.value = expression;
}


function calculate()
{
    expression = eval(expression);
	out.value = expression;
	expression = "";
}
function Clear()
{
    expression = "";
	out.value = "";
}
function Delete()
{
    out.value = out.value.slice(0,-1)
}