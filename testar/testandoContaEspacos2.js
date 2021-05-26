


function contaEspacos(string){
  let espacos=[]
  for(let index=0; index<string.length; index+=1){
    if(string[index]===' '){espacos.push(index)} 
  }
return espacos
}
//resolve desafio
function splitSentence(string) {
  
  string = ' ' + string + ' '
  let espacos = contaEspacos(string)
  console.log(espacos)
}

splitSentence('alou trybe')
