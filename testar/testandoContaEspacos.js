function contaEspacos(string){
  let espacos=[]
  for(let index=0; index<string.length; index+=1){
    if(string[index]===' '){espacos.push(index)} 
  }
return espacos
}
