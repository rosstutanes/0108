// Condition 1
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",compare1)

function compare1(){
	let input1 = Number(document.querySelector("#input1").value);
	let input2 = Number(document.querySelector("#input2").value);
	if(input1 >= input2){
		document.getElementById("result1").innerHTML = input1;
	}else{
		document.getElementById("result1").innerHTML = input2;
	}
}

//Condition 2
let btn2= document.querySelector("#btn2");
btn2.addEventListener("click",compare2)

function compare2(){
	let input3 = Number(document.querySelector("#input3").value);
	if(input3 >= 90){
		document.getElementById("result2").innerHTML = "A";
	}else if (input3 >= 80){
		document.getElementById("result2").innerHTML = "B";
	}else if (input3 >= 70){
		document.getElementById("result2").innerHTML = "C";
	}else if (input3 >= 65){
		document.getElementById("result2").innerHTML = "D";
	}else {
		document.getElementById("result2").innerHTML = "F";
	}
}

//Condition 3

let input4 = document.getElementById()


// Hello World !
// Kon'nichiwa sekai
// kumusta sa mundo