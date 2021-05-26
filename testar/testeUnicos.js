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

console.log(achaUnicos([1, 3, 1, 2, 3, 1, 5, 2, 1, 2, 5, 6]))