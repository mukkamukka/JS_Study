const listForm = document.querySelector("#list-form");
const listInput = document.querySelector("#list-form input");
const resetButton = document.querySelector("#reset");
let newInput =  "";

function handleListSubmit(event) {
    event.preventDefault();
    const realInput = listInput.value.split(':', 2);
    if(isNaN(parseInt(realInput[1])) === false){
        newInput = listInput.value + "\n" + newInput;
        listInput.value = "";
        paintInput(newInput);
    } else {
        alert("상품명:가격 똑바로 입력하여 주십시오.")
    }
}

function paintInput(){   
    const p = document.querySelector("#list");
    p.innerText = newInput;
}

function hadleResetButton() {    
    newInput = "";
    paintInput();
}

listForm.addEventListener("submit", handleListSubmit);
resetButton.addEventListener("click", hadleResetButton);
