let name = document.querySelector("#name");
const BT_REGISTER = document.querySelector("#bt_register");

let tempo;

BT_REGISTER.addEventListener("click", () =>{
    const date = new Date();

    console.log(date.toLocaleTimeString());

    clearTimeout(tempo);

    BT_REGISTER.className = "bi bi-bookmark-check-fill";
    BT_REGISTER.style.color = "green";


    tempo = setTimeout(() => {

       BT_REGISTER.className = "bi bi-play-circle-fill"
       BT_REGISTER.style.color = "#069bff"

    }, 1000);

});


name.textContent = "João Silva";

const hour = document.querySelector(".hour");

const relogio = () => {
    const date = new Date();
    const hora = date.getHours();
    let minutos = date.getMinutes();
    let minutes = minutos.toString()

    hour.textContent = `${hora}:${minutes.padStart(2,"0")}`
}
relogio()
setInterval(relogio,1000)
// hour.textContent = `${hora}:${minutos}:${segundos}`;