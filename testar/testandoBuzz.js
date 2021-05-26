function div5(n) {
  let resposta;
  if (n%5 === 0) { resposta = true }
  else { resposta = false }
  return resposta;
}
//função divide por 3
function div3(n) {
  let resposta;
  if (n%3 === 0) { resposta = true }
  else { resposta = false }
  return resposta;
}

function printFizzBuzz(d5, d3, answer, fizzBuzz){
 if (d5 === true && d3 === true) { 
  answer = 'fizzBuzz'
  fizzBuzz.push(answer)
}
}

function printBuzz(d5, d3, answer, fizzBuzz){
  if (d5 === true && d3 === false) { 
    answer = 'buzz'
    fizzBuzz.push(answer)
  }
 }

 function printFizz(d5, d3, answer, fizzBuzz){
  if (d5 === false && d3 === true) { 
    answer = 'fizz'
    fizzBuzz.push(answer)
  }
 }

 function printBug(d5, d3, answer, fizzBuzz){
  if (d5 === false && d3 === false) { 
    answer = 'bug!'
    fizzBuzz.push(answer)
  }
  
 }

//  Resolve o desafio
function fizzBuzz(array) {
  let d5;
  let d3;
  let answer;
  let fizzBuzz=[];
  for (let index = 0; index < array.length; index+=1) {
    d5 = div5(array[index])
    d3 = div3(array[index])
    printFizzBuzz(d5, d3, answer, fizzBuzz)
    printBuzz(d5, d3, answer, fizzBuzz)
    printFizz(d5, d3, answer, fizzBuzz)
    printBug(d5, d3, answer, fizzBuzz)

  }
  return fizzBuzz;
}

console.log(fizzBuzz([1, 3, 5, 15, 10, 9, 5, 1]))
