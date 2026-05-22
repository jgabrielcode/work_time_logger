let name = document.querySelector("#name");



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