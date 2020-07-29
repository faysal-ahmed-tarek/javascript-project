var number = document.querySelectorAll('.number');
var output = document.querySelector(".output_value");


var displayValue = "0";
var pendingValue ;
var evalMethod = [];

for(var i=0; i<number.length; i++){
    number[i].addEventListener("click",function(event){
    btntext =  event.target.innerHTML;

    if(displayValue === "0"){
        displayValue = " ";
    }   
    
    displayValue += btntext ;
    output.innerHTML = displayValue ;
    });

};

//operator Button
var operator_Button = document.querySelectorAll(".operator");
for(var i = 0;i< operator_Button.length;i++){
    operator_Button[i].addEventListener("click",function(){
        var operator = event.target.innerHTML ;
        switch(operator){
            case "+":
                pendingValue = displayValue ;
                displayValue = "0";
                output.innerHTML = displayValue ;
                evalMethod.push(pendingValue);
                evalMethod.push("+");
            break;
            case "-":
                pendingValue = displayValue ;
                displayValue = "0";
                output.innerHTML = displayValue ;
                evalMethod.push(pendingValue);
                evalMethod.push("-");
            break;
            case "X":
                pendingValue = displayValue ;
                displayValue = "0";
                output.innerHTML = displayValue ;
                evalMethod.push(pendingValue);
                evalMethod.push("*");
            break;
            case "÷":
                pendingValue = displayValue ;
                displayValue = "0";
                output.innerHTML = displayValue ;
                evalMethod.push(pendingValue);
                evalMethod.push("/");
            break;
            // case "%":
            //     pendingValue = displayValue ;
            //     displayValue = "0";
            //     output.innerHTML = displayValue ;
            //     evalMethod.push(pendingValue);
            //     evalMethod.push("%");
            // break;
            case "=":
                evalMethod.push(displayValue);
                var join = eval(evalMethod.join(" "));
                displayValue = join + " ";
                output.innerHTML = displayValue ;
                evalMethod = [];
            break;
            default :
            break;
        }
    })
}



//decimal Button
var decimal_button = document.querySelector(".decimal");
decimal_button.addEventListener("click",function(){
if(!displayValue.includes(".")){
    displayValue += ".";
}
})

//clear button 
var clear_button = document.querySelector(".clear");
clear_button.addEventListener("click",function(){
    displayValue = "0" ;
    output.innerHTML = displayValue ;
})

//delete last element
var backspace = document.querySelector("#backspace");
backspace.addEventListener("click",function(){
    displayValue = displayValue.slice(0,displayValue.length-1);
    if(displayValue === " "){
        displayValue = "0";
    }
    output.innerHTML = displayValue ;
})