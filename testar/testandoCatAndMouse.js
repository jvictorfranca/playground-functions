function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let cat1_mouse = mouse - cat1;
  let cat2_mouse = mouse - cat2;
  let answer;
  if (cat1_mouse < cat2_mouse) {answer = 'cat1'}
  else if (cat2_mouse < cat1_mouse) {answer = 'cat2'}
  else {answer='os gatos trombam e o rato foge'}
  return answer
}

console.log (catAndMouse(5, 5, 0))