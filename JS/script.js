const campoTexto = document.getElementById('cidade')
const botao_pesquisa = document.getElementById("botao")
const temperatura = document.getElementById("temperatura")
const sensacao = document.getElementById("sensacao")
const umidade = document.getElementById("umidade")
const vento = document.getElementById("vento")

async function buscaCidade() {
    try {
        let cidade = campoTexto.value
        const _consultaCidade = await fetch(`https://api.weatherapi.com/v1/current.json?key=1dedf2f99a5a4ab894f230325231107&q=${cidade}&aqi=no`)
        const consultaCidade = await _consultaCidade.json()
        const clima = consultaCidade.current
        if (consultaCidade.erro) {
        throw Error("Cidade não encontrada")
        }

        console.log(consultaCidade)

        temperatura.textContent = "Temperatura: " + clima.temp_c + "°C" 
        sensacao.textContent = "Sensação térmica: " + clima.feelslike_c + "°C"
        umidade.textContent = "Umidade: " + clima.humidity + "%"
        vento.textContent = "Velocidade do vento: " + clima.wind_kph + "kph"
        

        return consultaCidade
        } catch(erro){
        return "error"
        }

}

botao.addEventListener("click", buscaCidade)