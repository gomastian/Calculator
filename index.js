let number1 = null;
let number2 = null;
// let operator;
let operation=null;

let numberButtons = document.querySelectorAll(".number")
let screen = document.querySelector(".screen")
let operatorButtons = document.querySelectorAll(".operator")

numberButtons.forEach((number)=> {
    number.addEventListener("click", ()=>{

        if(number1){
            number1 = number1 + number.innerText
        }else{
            number1 = number.innerText
        }
        console.log(number1)
        screen.innerText = number1
    })
})

operatorButtons.forEach(operator=>{
    operator.addEventListener("click",()=>{
        if (operator.id !== "equals"){
            screen.innerText = 0
            operation = operator.id
            number2 = number1
            number1 = null
        }else{
            switch(operation){
                case "add":
                    screen.innerText = parseInt(number2) + parseInt(number1)
                    break;
                case "sub":
                    screen.innerText = parseInt(number2) - parseInt(number1)
                    break;
                case "mul":
                    screen.innerText = parseInt(number2) * parseInt(number1)
                    break;
                case "dic":
                    screen.innerText = parseInt(number2) / parseInt(number1)
                    break;
                    
            }
        }

    } )

})




