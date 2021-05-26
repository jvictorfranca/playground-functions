function decode(string) {
  // seu código aqui
  let decodificador = {
    1:"a",
    2:"e",
    3:"i",
    4:"o",
    5:"u",
  }
  let codigo = ""
  let adicao ;
  for (index = 0; index<string.length; index+=1){
    adicao=""
    for (key in decodificador){
      if (string[index]==key){adicao+=decodificador[key]}
    }
    if (adicao.length===1){codigo+=adicao}
    else {codigo+=string[index]}
  }
  return codigo
  
}

console.log(decode('h3 th2r2'))