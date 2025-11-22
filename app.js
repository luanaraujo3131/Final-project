// IMC
// ------------------------------
// IMC
// ------------------------------

function calcularIMC(e) {
  e.preventDefault();

  const heightCm = Number(document.getElementById('height').value);
  const weight = Number(document.getElementById('peso').value);

  if (!heightCm || !weight || heightCm <= 0 || weight <= 0) {
    document.getElementById('resultado-imc').textContent = 'Enter valid data';
    return;
  }

  const height = heightCm / 100;
  const imc = (weight / (height * height)).toFixed(2);

  document.getElementById('resultado-imc').textContent = `IMC: ${imc}`;
}

function limparIMC() {
  document.getElementById('form-imc').reset();
  document.getElementById('resultado-imc').textContent = '';
}

document.getElementById('form-imc').addEventListener('submit', calcularIMC);
document.getElementById('limpar-imc').addEventListener('click', limparIMC);


// ------------------------------
// BMR + Caloric Expenditure
// ------------------------------

function calcularBMR(e) {
  e.preventDefault();

  const ages = Number(document.getElementById('age').value);
  const weight = Number(document.getElementById('peso-bmr').value);
  const height = Number(document.getElementById('altura-bmr').value);
  const sexo = document.getElementById('sexo').value;
  const fator = Number(document.getElementById('atividade').value);

  if (!ages || !weight || !height) {
    document.getElementById('resultado-bmr').textContent = 'Enter valid data.';
    return;
  }

  let bmr;

  if (sexo === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * ages + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * ages - 161;
  }

  const gasto = Math.round(bmr * fator);

  document.getElementById('resultado-bmr').textContent =
    `BMR: ${Math.round(bmr)} kcal — Daily expenditure: ${gasto} kcal`;
}

function limparBMR() {
  document.getElementById('form-bmr').reset();
  document.getElementById('resultado-bmr').textContent = '';
}

document.getElementById('form-bmr').addEventListener('submit', calcularBMR);
document.getElementById('limpar-bmr').addEventListener('click', limparBMR);


/*document.getElementById('form-macros').addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = Number(document.getElementById('macro-weight').value);
  const height = Number(document.getElementById('macro-height').value);
  const age = Number(document.getElementById('macro-age').value);
  const sex = document.getElementById('macro-sex').value;
  const activity = Number(document.getElementById('macro-activity').value);
  const goal = document.getElementById('macro-goal').value;

  if (!weight || !height || !age) {
    document.getElementById('macro-result').textContent = 'Enter valid values.';
    return;
  }

  let bmr;
  if (sex === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  const tdee = Math.round(bmr * activity);

  let proteinPerKg;
  let fatPercent;

  if (goal === 'bulk') {
    proteinPerKg = 2.0;  // ganho de massa
    fatPercent = 0.30;
  } 
  else if (goal === 'cut') {
    proteinPerKg = 2.2;  // perda de gordura
    fatPercent = 0.22;
  } 
  else {
    proteinPerKg = 1.8;  // manutenção
    fatPercent = 0.28;
  }

  const protein = Math.round(weight * proteinPerKg);

  const fatCalories = Math.round(tdee * fatPercent);
  const fat = Math.round(fatCalories / 9);

  const remainingCalories = tdee - (protein * 4) - (fat * 9);
  const carbs = Math.round(remainingCalories / 4);

  document.getElementById('macro-result').innerHTML = `
    <strong>TDEE:</strong> ${tdee} kcal/day<br>
    <strong>Protein:</strong> ${protein} g<br>
    <strong>Fat:</strong> ${fat} g<br>
    <strong>Carbs:</strong> ${carbs} g
  `;
});*/