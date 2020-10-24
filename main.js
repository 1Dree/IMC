const inputWeight = document.querySelector("input#weight"),
  inputHeight = document.querySelector("input#height"),
  calculate = document.querySelector("#calculate"),
  result = document.querySelector("#result");

const gte = (minLimit, el) => {
  return el.value >= minLimit;
};

const numericKey = (el) => {
  return !/[A-z]/.test(el.value);
};

const renderResult = (imcRe) => {
  result.textContent = "";

  // Tabela IMC
  // Classificação para adultos acima de 20 anos.

  // Menor que 18.5 - Abaixo do peso;
  // Entre 18.5 e 24.9 - Peso normal;
  // Entre 25.0 e 29.9 - Pré-obesidade;
  // Entre 30.0 e 34.9 - Obesidade Grau 1 ;
  // Entre 35.0 e 39.9 - Obesidade Grau 2 ;
  // Acima de 40 - Obesidade Grau 3;

  if (imcRe < 18.5) {
    result.innerHTML = `
        <h1>${imcRe}</h1>
        <p>Abaixo do peso</p>
    `;
  } else if (imcRe >= 18.5 && imcRe <= 24.9) {
    result.innerHTML = `
        <h1>${imcRe}</h1>
        <p>Normal</p>
    `;
  } else if (imcRe >= 25.0 && imcRe <= 29.9) {
    result.innerHTML = `
        <h1>${imcRe}</h1>
        <p>Pré-obesidare</p>
    `;
  } else if (imcRe >= 30.0 && imcRe <= 34.9) {
    result.innerHTML = `
        <h1>${imcRe}</h1>
        <p>Obesidade Grau 1</p>
    `;
  } else if (imcRe >= 35.0 && imcRe <= 39.9) {
    result.innerHTML = `
        <h1>${imcRe}</h1>
        <p>Obesidade Grau 2</p>
    `;
  } else {
    result.innerHTML = `
        <h1>${imcRe}</h1>
        <p>Obesidade Grau 3</p>
    `;
  }
};

const imcCalc = (weight, height) => {
  const imc = (weight / height ** 2).toFixed(1);

  renderResult(imc);
};

const formValidation = (verify) => {
  const user = {
    weight: [gte(1, inputWeight), numericKey(inputWeight)],
    height: [gte(1, inputHeight), numericKey(inputHeight)],
  };

  verify(user.weight, user.height)
    ? imcCalc(inputWeight.value, inputHeight.value)
    : (result.innerHTML = "<h3>Preencha os campos corretamente.</h3>");
};

calculate.addEventListener("click", function () {
  formValidation((...objsProps) => {
    return objsProps.every((item, i) => item[i] === true);
  });
});
