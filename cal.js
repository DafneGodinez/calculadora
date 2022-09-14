var num1;
var num2;
var result;


function calcAdd(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	console.log(num1);
	console.log(num2);
	
	result = parseInt(num1) + parseInt(num2);
	console.log(result);
	
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = 'Resultado:' + result;
	}

function calcSubs(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	console.log(num1);
	console.log(num2);
	
	result = parseInt(num1) - parseInt(num2);
	console.log(result);
	
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = 'Resultado:' + result;
	}  

function calcMult(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	console.log(num1);
	console.log(num2);
	
	result = parseInt(num1) * parseInt(num2);
	console.log(result);
	
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = 'Resultado:' + result;
	}  

function calcDiv(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	console.log(num1);
	console.log(num2);
	
	result = parseInt(num1) / parseInt(num2);
	console.log(result);
	
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = 'Resultado:' + result;
	} 

function calcTimes(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	console.log(num1);
	console.log(num2);
	
	result = parseInt(num1) * parseInt(num1);
	console.log(result);
	
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = 'Resultado:' + result;
	} 

function calcSqrt(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	console.log(num1);
	console.log(num2);
	
	result = Math.pow(parseInt(num1), 0.5);
	console.log(result);
	
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = 'Resultado:' + result;
	}   

function calcPow(){
	var num1Element = document.getElementById("num1");
	var num2Element = document.getElementById("num2");
	num1 = num1Element.value;
	num2 = num2Element.value;
	console.log(num1);
	console.log(num2);
	
	result = Math.pow(parseInt(num1), parseInt(num2));
	console.log(result);
	
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = 'Resultado:' + result;
	}  
