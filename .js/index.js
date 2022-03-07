function sorteia() {
    let numeroSecreto = Math.round(Math.random() * 10);
    if(numeroSecreto == 0){ 
        numeroSecreto = 1;
    }
    return numeroSecreto;
}

const numeroSecreto = sorteia()
console.log(numeroSecreto);

const input = document.querySelector("input");
input.focus();

const msg = document.getElementById("msg");

const msgWinOrLose = document.getElementById("msgWinOrLose");

const refresh = document.getElementById("refresh");

const adivinhaButton = document.getElementById("adivinhaButton");

const adivinhaContainer = document.getElementById("adivinhaContainer");

const adivinhaTitle = document.getElementById("adivinhaTitle")

function adivinhar() {
    if(input.value == numeroSecreto){
        
        msg.innerHTML="PARABÉNS!!!<br> VOCÊ ACERTOU!!!"
        adivinhaTitle.style.textShadow="#00FA5E 0.1em 0.1em 0.2em"
        adivinhaContainer.style.boxShadow="#00FA5E 0 8px 32px 0"
        msg.style.fontSize="20px"
        msg.style.fontWeight="bold"
        // msg.style.textShadow="white 0.1em 0.1em 0.2em"
        msg.style.color="#00FA5E"
        input.style.border="1px solid #00FA5E"
        adivinhaButton.style.display="none"
        refresh.style.display="flex"
    } else if(input.value < 1 || input.value > 10){
        input.style.border="1px solid crimson"
        msg.innerText="INSIRA UM NÚMERO DE 1 A 10."
        msg.style.fontWeight="bold"
        // msg.style.textShadow="blueviolet 0.1em 0.1em 0.2em"
        msg.style.color="crimson"
    } else {
        // msg.style.textShadow="blueviolet 0.1em 0.1em 0.2em"
        msg.style.color="crimson"
        msg.style.fontWeight="bold"
        msg.innerHTML=`ERA O ${numeroSecreto}...<br>TENTE NOVAMENTE...`
        adivinhaContainer.style.boxShadow="crimson 0 8px 32px 0"
        adivinhaTitle.style.textShadow="crimson 0.1em 0.1em 0.2em"
        adivinhaButton.style.display="none"
        refresh.style.display="flex"
    }
}