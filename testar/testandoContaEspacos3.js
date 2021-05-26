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

console.log(splitSentence('alou trybe'))