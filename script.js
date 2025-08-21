//conectar com API do dolar simulando um NO-SQL

fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json
}).then(economia => {
    console.log(economia)

    document.getElementById('valorDolar').innerHTML = economia.USD-BRL.bind
})