const dadosJson = require("./4percentualDados.json");

//transformando json em array
const jsonString = JSON.stringify(dadosJson);

const jsonObject = JSON.parse(jsonString);

const jsonArray = Object.values(jsonObject); 

//pegando valor total de faturamento mensal
function encontrarValorTotalFaturamentoMensal(lista) {
  let soma = 0
  lista.forEach((item) => {
    soma = soma + item['valor']
  })
  
  return soma
}

somaFaturamentoMensal = encontrarValorTotalFaturamentoMensal(jsonArray)

console.log(somaFaturamentoMensal)

//calculando percentual de cada estado
function calcularPercentualDeCadaEstado(lista, somaFaturamentoMensal) {
  lista.forEach((item) => {
     item.percentual = (item['valor'] * 100) / somaFaturamentoMensal
  })
}

calcularPercentualDeCadaEstado(jsonArray, somaFaturamentoMensal)

console.log(jsonArray)