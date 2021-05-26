// Desafio 10
function techList(array, name) {
  let lista;
  let obj;
  array = array.sort();
  if (array.length === 0) {
    lista = 'Vazio!';
  } else {
    lista = [];
    for (let index = 0; index < array.length; index += 1) {
      obj = { };
      obj.tech = array[index];
      obj.name = name;
      lista.push(obj);
    }
  }
  return lista;
}

// Desafio 11
function achaUnicos(array) {
  let unicos = [];
  for (let index = 0; index < array.length; index += 1) {
    let soma = 0;
    for (let index2 = 0; index2 < unicos.length; index2 += 1) {
      if (array[index] === unicos[index2]) {
        soma += 1;
      }
    }
    if (soma < 1) {
      unicos.push(array[index]);
    }
  }
  return unicos;
}

function maiorRepeticao(array, unicos) {
  let soma = 0;
  let maior = 0;
  for (let index = 0; index < unicos.length; index += 1) {
    soma = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index2] === unicos[index]) {
        soma += 1;
      }
    }
    if (maior < soma) {
      maior = soma;
    }
  }
  return maior;
}

function menoresQueZero(array) {
  let soma = 0;
  let answer;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0) {
      soma += 1;
    }
  }
  if (soma === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

function maioresQue10(array) {
  let soma = 0;
  let answer;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 9) {
      soma += 1;
    }
  }
  if (soma === 0) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}

function checkPhone(array) {
  let answer;
  if (array.length === 11
    && maiorRepeticao(array, achaUnicos(array)) < 3
    && menoresQueZero(array) === true
    && maioresQue10(array) === true) {
    answer = true;
  } else if (array.length !== 11) {
    answer = 'Array com tamanho incorreto.';
  } else {
    answer = 'não é possível gerar um número de telefone com esses valores';
  }
  return answer;
}

function generatePhoneNumber(array) {
  // seu código aqui
  let answer;
  if (checkPhone(array) === true) {
    answer = `(${array[0]}${array[1]}) ${
      array[2]}${array[3]}${array[4]}${array[5]}${array[6]
    }-${array[7]}${array[8]}${array[9]}${array[10]}`;
  } else {
    answer = checkPhone(array);
  }
  return answer;
}

// Desafio 12

function menorQueSoma(lineA, lineB, lineC){
  let answer;
  if(lineA < lineB + lineC
    && lineB < lineA + lineC
    && lineC < lineA + lineB) {answer = true
    } else {
      answer = false
    }
  return answer
}

function maiorQueAbs(lineA, lineB, lineC){
  let answer;
  if(lineA > Math.abs(lineB-lineC)
  && lineB > Math.abs(lineA-lineC)
  && lineC > Math.abs(lineA-lineB)) {
    answer = true
  } else {
    answer = false}
  return answer
}

function triangleCheck(lineA, lineB, lineC) {
  if (maiorQueAbs(lineA, lineB, lineC) === true 
  && menorQueSoma(lineA, lineB, lineC) === true){
    answer = true;
  } else {
    answer = false;
  }
return answer
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
