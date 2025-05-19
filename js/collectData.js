import { validateInputs } from "./validateInputs.js";

function collectData(){

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const  email = document.getElementById('email');
    const cpf = document.getElementById('cpf');
    const lastName = document.getElementById('lastName');

      const inputs = [];    
    inputs.push(name.value, phone.value, email.value, cpf.value, lastName.value);
    console.log(inputs);

    validateInputs(inputs);
}

document.querySelector('.btn-buy').addEventListener('click', collectData);