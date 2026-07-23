function calculate() {
  let gender = document.getElementsByName("gender");
  let age = document.getElementById("age");
  let height = document.getElementById("height");
  let kg = document.getElementById("kg");

  let peso = Number(kg.value);
  let idade = Number(age.value);
  let altura = Number(height.value);

  let result = document.querySelector("div#result");
  let genero = "";

  if (age.value.length == 0 || idade > 130 || idade < 1) {
    window.alert("Informe seu idade corretamente!");
  } else if (kg.value.length == 0) {
    alert("Infomr seu peso em kilogramas!");
  } else if (height.value.length == 0) {
    window.alert("Inform sua altura em cm!");
  } else {
    if (gender[0].checked) {
      genero = "Masculino";
      let calculoMasc = 10 * peso + 6.25 * altura - 5 * idade + 5;
      result.innerHTML = `${calculoMasc}`;
    } else {
      let calculoFemi = 10 * peso + 6.25 * altura - 5 * idade + 161;
    }
  }
}
