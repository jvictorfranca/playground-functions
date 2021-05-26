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

console.log(maiorRepeticao([1, 1, 1, 1, 2, 2, 3, 1, 1, 4], [1, 2, 3, 4]))