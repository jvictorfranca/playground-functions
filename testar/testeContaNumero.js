function contaNumeros(string){
  let reg = /\d+/g;
  let result = string.match(reg)
  console.log(result)
}
 

contaNumeros("oi sr 3 esse aqui é o sr 4 e o sr 5")
