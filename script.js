function calculate() {
  const gender = document.getElementsByName("gender");
  const age = document.getElementById("age");
  const height = document.getElementById("height");
  const kg = document.getElementById("kg");

  const peso = Number(kg.value);
  const idade = Number(age.value);
  const altura = Number(height.value);

  const result = document.querySelector("div#result");
  const genero = "";

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
      result.innerHTML = `Seu gasto calórico diário é de ${calculoMasc} kcal! `;
    } else {
      let calculoFemi = 10 * peso + 6.25 * altura - 5 * idade + 161;
      result.innerHTML = `Seu gasto calórico diário é de ${calculoFemi} kcal! `;
    }
  }
}
