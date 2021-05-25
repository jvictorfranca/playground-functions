// Desafio 10
function techList(array, name) {
  let lista;
  let obj;
  array = array.sort()
  if (array.length === 0){
    lista = "Vazio!"
  } else {  
    lista = [];
    for (let index = 0; index < array.length; index+=1) {
      obj = { }
      obj['tech'] = array[index];
      obj['name'] = name;
      lista.push(obj)
      }
  }
  return lista
  }


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
