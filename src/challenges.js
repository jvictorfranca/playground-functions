// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  let resposta;
  if (a === true && b === true) {
    resposta = true;
  } else {
    resposta = false;
  }
  return resposta;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

//  Desafio 3 ----------------------------------------------------------------------------------------------------------------
//  conta espaços
function contaEspacos(string) {
  let espacos = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === ' ') {
      espacos.push(index);
    }
  }
  return espacos;
}
//  Resolve desafio
function splitSentence(string) {
  let frase = [];
  let palavra = '';
  let string2 = ` ${string} `;
  let espacos = contaEspacos(string2);

  for (let index = 0; index < espacos.length - 1; index += 1) {
    palavra = '';
    for (let index2 = espacos[index] + 1; index2 < espacos[index + 1]; index2 += 1) {
      palavra += string2[index2];
    }
    frase.push(palavra);
  }
  return frase;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let palavra = '';
  palavra = `${array[array.length - 1]}, ${array[0]}`;
  return palavra;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = 3 * wins + 1 * ties;
  return result;
}

// Desafio 6----------------------------------------------------------------------
//  Acha o maior numero
function biggest(array) {
  let maior = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (maior < array[index]) {
      maior = array[index];
    }
  }
  return maior;
}
//  resolve o desafio
function highestCount(array) {
  // seu código aqui
  let maior = biggest(array);
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === maior) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Mouse = mouse - cat1;
  cat1Mouse = Math.abs(cat1Mouse);
  let cat2Mouse = mouse - cat2;
  cat2Mouse = Math.abs(cat2Mouse);
  let answer;
  if (cat1Mouse < cat2Mouse) {
    answer = 'cat1';
  } else if (cat2Mouse < cat1Mouse) {
    answer = 'cat2';
  } else {
    answer = 'os gatos trombam e o rato foge';
  }
  return answer;
}

// Desafio 8 ------------------------------------------------------

//  Função divide por 5
function div5(n) {
  let resposta;
  if (n % 5 === 0) {
    resposta = true;
  } else {
    resposta = false;
  }
  return resposta;
}
// Função divide por 3
function div3(n) {
  let resposta;
  if (n % 3 === 0) {
    resposta = true;
  } else {
    resposta = false;
  }
  return resposta;
}
//  Resolve o desafio
function fizzBuzz(array) {
  let d5;
  let d3;
  let answer;
  let fizzBuzzArray = [];
  for (let index = 0; index < array.length; index += 1) {
    d5 = div5(array[index]);
    d3 = div3(array[index]);
    if (d5 === true && d3 === true) {
      answer = 'fizzBuzz';
    } else if (d5 === true && d3 === false) {
      answer = 'buzz';
    } else if (d5 === false && d3 === true) {
      answer = 'fizz';
    } else {
      answer = 'bug!';
    }
    fizzBuzzArray.push(answer);
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  // Seu código aqui
  let codificador = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let codigo = '';
  let adicao;
  for (let index = 0; index < string.length; index += 1) {
    adicao = '';
    for (let key in codificador) {
      if (string[index] === key) {
        adicao += codificador[key];
      }
    }
    if (adicao.length === 1) {
      codigo += adicao;
    } else {
      codigo += string[index];
    }
  }
  return codigo;
}
function decode(string) {
  // Seu código aqui
  let decodificador = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let codigo = '';
  let adicao;
  for (let index = 0; index < string.length; index += 1) {
    adicao = '';
    for (let key in decodificador) {
      if (string[index] === key) {
        adicao += decodificador[key];
      }
    }
    if (adicao.length === 1) {
      codigo += adicao;
    } else {
      codigo += string[index];
    }
  }
  return codigo;
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
