

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafo = document.getElementsByClassName('parrafo')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

//h1.innerHTML = 'Argiro <hr> Arias' 

//h1.innerText = 'Argiro <hr> Arias' 
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo')
//h1.classList.add('cafe')
//h1.classList.remove('verde')
//input.value = 1234567890

console.log(document.createElement('img'));
const img = document.createElement('img');

img.setAttribute('src', './pexels-markus-spiske-1089440.jpg')

pid.innerHTML = ''
pid.append(img)

h1 = document.querySelector('h1')
const input1 = document.querySelector('#calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.querySelector('#calcular')

