// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let resposta;
  if (a === true && b === true) { resposta = true }
  else { resposta = false };
  return resposta;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
return (base*height)/2;
}

/////////////////////////////////////// Desafio 3 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//conta espaços
function contaEspacos(string){
  let espacos=[]
  for(let index=0; index<string.length; index+=1){
    if(string[index]===' '){espacos.push(index)} 
  }
return espacos
}
//resolve desafio
function splitSentence(string) {
  let frase=[]
  let palavra=''
  string = ' ' + string + ' '
  let espacos = contaEspacos(string)
  
  for(index=0; index<espacos.length-1; index+=1){
    palavra = ''
    for(let index2= espacos[index]+1; index2<espacos[index+1]; index2+=1){
      palavra += string[index2]
    }
    frase.push(palavra)
  }
return frase
}  

// Desafio 4
function concatName(array) {
  // seu código aqui
  let palavra = ''
  palavra = array[array.length-1] + ', ' + array[0]
  return palavra
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = 3 * wins + 1 * ties
  return result
}

// Desafio 6/////////////////////////////////////////////////////////////////////////////////////////
//Acha o maior numero
function biggest(array) {
  let maior=array[0]
  for (let index = 1 ; index<array.length ; index+=1){
    if (maior < array[index]) {maior = array[index]}
  }
  return maior
}
//resolve o desafio
function highestCount(array) {
  // seu código aqui
  let maior = biggest(array)
  let sum = 0
  for (let index = 0 ; index<array.length ; index+=1){
    if(array[index] === maior) {
      sum +=1
    } 
  }
  return sum
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1_mouse = mouse - cat1;
  cat1_mouse = Math.abs(cat1_mouse)
  let cat2_mouse = mouse - cat2;
  cat2_mouse = Math.abs(cat2_mouse)
  let answer;
  if (cat1_mouse < cat2_mouse) {answer = 'cat1'}
  else if (cat2_mouse < cat1_mouse) {answer = 'cat2'}
  else {answer='os gatos trombam e o rato foge'}
  return answer
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
