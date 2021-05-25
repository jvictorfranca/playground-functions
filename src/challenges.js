// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a===true && b===true){return true} else{return false}
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
return (base*height)/2
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
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
