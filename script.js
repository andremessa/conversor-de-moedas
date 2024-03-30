const botaoConverter = document.querySelector(".botao-converter")
const moedaConvertida = document.querySelector(".moeda-convertida")
const moedaConverter = document.querySelector(".moeda-converter")


function converterValores() {
    const valorAConverter = document.querySelector(".valor-converter").value
    const valorMoedaConverter = document.querySelector(".valor-moeda-converter")
    const valorMoedaConvertida = document.querySelector(".valor-moeda-convertida")


    const realHoje = 1
    const dolarHoje = 4.9962
    const euroHoje = 5.3979
    const libraHoje = 6.3122

    // MOEDAS A CONVERTER
    if (moedaConverter.value == "dolar") {
        valorMoedaConverter.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorAConverter)
        total = valorAConverter * dolarHoje
    }
    if (moedaConverter.value == "euro") {
        valorMoedaConverter.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valorAConverter)
        total = valorAConverter * euroHoje
    }
    if (moedaConverter.value == "libra") {
        valorMoedaConverter.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valorAConverter)
        total = valorAConverter * libraHoje
    }
    if (moedaConverter.value == "real") {
        valorMoedaConverter.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(valorAConverter)
        total = valorAConverter * realHoje
    }

    // MOEDAS CONVERTIDAS
    if (moedaConvertida.value == "dolar") {
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(total / dolarHoje)
    }
    if (moedaConvertida.value == "euro") {
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-DE", {
            style: "currency",
            currency: "EUR"
        }).format(total / euroHoje)
    }
    if (moedaConvertida.value == "libra") {
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(total / libraHoje)
    }
    if (moedaConvertida.value == "real") {
        valorMoedaConvertida.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(total / realHoje)
    }
}

function trocouDeMoeda() {
    const moedaConverterNome = document.getElementById("moeda-converter-nome")
    const imgMoedaConverter = document.getElementById("img-moeda-converter")

    if (moedaConverter.value == "real") {
        moedaConverterNome.innerHTML = "Real"
        imgMoedaConverter.src = "./assets/real.png"
    }

    if (moedaConverter.value == "dolar") {
        moedaConverterNome.innerHTML = "Dólar Americano"
        imgMoedaConverter.src = "./assets/dolar.png"
    }

    if (moedaConverter.value == "euro") {
        moedaConverterNome.innerHTML = "Euro"
        imgMoedaConverter.src = "./assets/euro.png"
    }

    if (moedaConverter.value == "libra") {
        moedaConverterNome.innerHTML = "Libra Esterlina"
        imgMoedaConverter.src = "./assets/libra.png"
    }

    const moedaConvertidaNome = document.getElementById("moeda-convertida-nome")
    const imgMoedaConvertida = document.getElementById("img-moeda-convertida")

    if (moedaConvertida.value == "dolar") {
        moedaConvertidaNome.innerHTML = "Dólar Americano"
        imgMoedaConvertida.src = "./assets/dolar.png"
    }

    if (moedaConvertida.value == "euro") {
        moedaConvertidaNome.innerHTML = "Euro"
        imgMoedaConvertida.src = "./assets/euro.png"
    }

    if (moedaConvertida.value == "libra") {
        moedaConvertidaNome.innerHTML = "Libra Esterlina"
        imgMoedaConvertida.src = "./assets/libra.png"
    }

    if (moedaConvertida.value == "real") {
        moedaConvertidaNome.innerHTML = "Real"
        imgMoedaConvertida.src = "./assets/real.png"
    }

    converterValores()
}

moedaConverter.addEventListener("change", trocouDeMoeda)
moedaConvertida.addEventListener("change", trocouDeMoeda)
botaoConverter.addEventListener("click", converterValores)