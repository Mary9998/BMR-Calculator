function calculate() {
  let gender = document.getElementsByName("gender");
  let age = document.getElementById("age");
  let height = document.getElementById("height");
  let kg = document.getElementById('kg')

  let peso = Number(kg.value)
  let idade = Number(age.value);
  let altura = Number(height.value);

  let result = document.querySelector("div#result");
  let genero = ''

  if(gender[0].checked){
    genero = 'Masculino'
    let calculoMasc = (10 * peso) + (6.25 * altura) - (5 * idade) + 5 
    result.innerHTML = `${calculoMasc}`
  } else {
    let calculoFemi = (10 * peso) + (6.25 * altura) - (5 * idade) + 161
  }
}
