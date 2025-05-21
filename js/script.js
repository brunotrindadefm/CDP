import { validateInputs } from "./validateInputs.js";

function collectData() {

  const name = document.getElementById('name');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const lastName = document.getElementById('lastName');

  const inputs = [];
  inputs.push(name.value, phone.value, email.value, cpf.value, lastName.value);

  const camp = [
    "Nome",
    "Sobrenome",
    "Telefone",
    "Email",  
    "CPF"
  ];

  const errors = validateInputs(inputs);
  if (errors.length > 0) {
    camp.forEach(c => {
      errors.forEach(error => {
        if(error.includes(c))
          console.log(error, c);
      })
    }) 
  }
}

document.querySelector('.btn-buy').addEventListener('click', collectData);