const numeroSecreto = Math.round(Math.random() * 10);
console.log(numeroSecreto);

const input = document.querySelector("input");
input.focus();

const msgParabens = document.getElementById("msgParabens")

const refresh = document.getElementById("refresh")

function adivinhar() {
    if(input.value == numeroSecreto){
        msgParabens.innerText="PARABEEEEEEENS! VOCE ACERTOU!"
        refresh.style.display="flex"
    } else {
        alert(`Era o ${numeroSecreto}... Tente novamente!`)
        location.reload();
    }
}
