const inputWeight = document.querySelector('input#weight'),
    inputHeight = document.querySelector('input#height'),
    calculate = document.querySelector('#calculate'),
    result = document.querySelector('#result');

const gte = (minLimit, el) => {
    return el.value >= minLimit;
}

const numericKey = (el) => {
    return !/[A-z]/.test(el.value);
}

const imcCalc = (weight, height) => {
    const imc = (weight / (height ** 2)).toFixed(1);

    result.textContent = '';
    // Tabela IMC 
    // Classificação para adultos acima de 20 anos.

    // Menor que 18.5 - Abaixo do peso;
    // Entre 18.5 e 24.9 - Peso normal;
    // Entre 25.0 e 29.9 - Pré-obesidade;
    // Entre 30.0 e 34.9 - Obesidade Grau 1 ;
    // Entre 35.0 e 39.9 - Obesidade Grau 2 ;
    // Acima de 40 - Obesidade Grau 3;
    if (imc < 18.5) {
        result.innerHTML = `<h1>${imc}</h1> <p>Abaixo do peso</p>`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        result.innerHTML = `<h1>${imc}</h1> <p>Normal</p>`;
    } else if (imc >= 25.0 && imc <= 29.9) {
        result.innerHTML = `<h1>${imc}</h1> <p>Pré-obesidare</p>`;
    } else if (imc >= 30.0 && imc <= 34.9) {
        result.innerHTML = `<h1>${imc}</h1> <p>Obesidade Grau 1</p>`;
    } else if (imc >= 35.0 && imc <= 39.9) {
        result.innerHTML = `<h1>${imc}</h1> <p>Obesidade Grau 2</p>`;
    } else {
        result.innerHTML = `<h1>${imc}</h1> <p>Obesidade Grau 3</p>`;
    }
}

const formValidation = (verify) => {
    const user = {
        weight: [gte(1, inputWeight), numericKey(inputWeight)],
        height: [gte(1, inputHeight), numericKey(inputHeight)]
    };

    const matchConditions = verify(user.weight, user.height);

    (matchConditions) ?
        imcCalc(inputWeight.value, inputHeight.value) :
        result.innerHTML = '<h3>Preencha os campos corretamente.</h3>';
}

calculate.addEventListener('click', function () {
    formValidation((...objsProps) => {
        const toAll = objsProps.every((item, i) => {
            return item[i] === true;
        });

        return toAll;
    });
});
