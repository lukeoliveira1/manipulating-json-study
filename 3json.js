const dadosJson = require("./3dados.json");

//transformando json em array
const jsonString = JSON.stringify(dadosJson);

const jsonObject = JSON.parse(jsonString);

const jsonArray = Object.values(jsonObject); 

//ordenando pelo valor
function ordenarDados(lista, propriedade) {
  const resultado = lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) {
      return -1;
    }
    if (a[propriedade] > b[propriedade]) {
      return 1;
    }
    return 0;
  });

  return resultado;
}

const jsonArrayOrdenado = ordenarDados(jsonArray, "valor");

//pegando maior e menor faturamento
console.log(jsonArray.length) // 30

console.log("Maior faturamento: " + jsonArrayOrdenado[29]['valor'])
console.log("Menor faturamento: " + jsonArrayOrdenado[0]['valor'])

//pegando média de faturamento mensal
function encontrarMediaFaturamentoMensal(lista) {
  let soma = 0
  lista.forEach((item) => {
    soma = soma + item['valor']
  })
  let media = 0
  media = soma / lista.length
  
  return media
}

mediaFaturamentoMensal = encontrarMediaFaturamentoMensal(jsonArray)

console.log(mediaFaturamentoMensal)

//filtrando dias que ficaram abaixo

function filtandoDiasAbaixoDaMediaMensalDeFaturamento(lista, mediaFaturamentoMensal) {
  let somaDias = 0
  lista.forEach((item) => {
    if(item['valor'] < mediaFaturamentoMensal) {
       somaDias = somaDias + 1
    }  
  })
  
  return somaDias
}
diasAbaixoDaMediaMensal = filtandoDiasAbaixoDaMediaMensalDeFaturamento(jsonArray, mediaFaturamentoMensal)

console.log(diasAbaixoDaMediaMensal)