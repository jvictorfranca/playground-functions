// let array = [5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]

function achaUnicos(array){
  let unicos = []
  for (let index = 0; index < array.length ; index+=1){
    let soma = 0
    for (let index2 = 0; index2 < unicos.length; index2 += 1){
      if (array[index] === unicos[index2]) {
        soma += 1 ;
      }
    }
      if (soma < 1) {
        unicos.push(array[index])
      }
  }
  return unicos
}



function maiorRepeticao(array, unicos){
  let soma = 0
  let maior = 0
  for (let index = 0; index < unicos.length; index+=1){
    soma = 0
    for(let index2 = 0; index2 < array.length ; index2 += 1){
      if (array[index2] === unicos[index]) {
        soma += 1;
      }
    }
    if (maior < soma) {maior = soma}
  }
return maior
}




function checkPhone(array){
  if (array.length === 11 &&  maiorRepeticao(array, achaUnicos(array)) < 3) {
    answer = true;
    } else if (array.length !== 11) {answer = "Array com tamanho incorreto."
    } else {answer = "não é possível gerar um número de telefone com esses valores"}
  return answer
}


function generatePhoneNumber(array) {
  // seu código aqui
  if (checkPhone(array)===true) {answer = "(" + array[0] + array[1] + ") " + array[2] + array[3] + array[4] + array[5] + array[6] + '-'  + array[7] + array[8] + array[9] + array[10] }
  else{answer = checkPhone(array)}
  return answer
}



console.log(generatePhoneNumber([5, 2, 8, 1, 5, 3, 7, 2, 8, 9, 0]))


