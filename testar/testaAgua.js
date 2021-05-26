// Desafio 13
//Fonte: https://www.youtube.com/watch?v=pfkkdzeyx6U

function contaNumeros(string){
  let reg = /\d+/g;
  let result = string.match(reg)
  return result
}

function soma(array){
  let somado = 0
  for (let index = 0; index < array.length; index += 1){
    somado = somado + parseInt(array[index])
    
  }
  return somado
}


function hydrate(string) {
  // seu código aqui
  let agua = soma(contaNumeros(string))
  let answer;
  if (agua > 1){answer = agua + " copos de água"}
  else {answer = agua + " copo de água"}
  return answer
  
}
