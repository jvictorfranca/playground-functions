function encode(string) {
  // seu código aqui
  let codificador = {
    a:1,
    e:2,
    i:3,
    o:4,
    u:5,
  }
  let codigo = ""
  let adicao ;
  for (index = 0; index<string.length; index+=1){
    adicao=""
    for (key in codificador){
      if (string[index]==key){adicao+=codificador[key]}
    }
    if (adicao.length===1){codigo+=adicao}
    else {codigo+=string[index]}
  }
  return codigo
}
console.log(encode('hi there'))