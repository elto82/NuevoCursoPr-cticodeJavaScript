
const form = document.querySelector('#form')

const input1 = document.querySelector('#calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#result')

//btn.addEventListener('click', btnOnClick)
form.addEventListener('submit', btnOnClick)

function btnOnClick (event) {
  event.preventDefault()
  const sumaInputs = input1.value + input2.value 
  resultado.innerText = `Resultado: ${sumaInputs}`
}

