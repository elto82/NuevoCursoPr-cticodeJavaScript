

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafo = document.querySelector('.parrafo')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')

console.log({
  h1,
  p,
  parrafo,
  pid,
  input,
});

h1.innerHTML = 'Argiro <hr> Arias' 


h1.innerText = 'Argiro <hr> Arias' 
console.log(h1.getAttribute('class'));
h1.setAttribute('class', 'rojo')