

const input1 = document.querySelector('#calculo1')
const input2 = document.getElementById('calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector('#result')

btn.addEventListener('click', btnOnClick)

function btnOnClick () {
  const sumaInputs = input1.value + input2.value 
  resultado.innerText = `Resultado: ${sumaInputs}`
}

