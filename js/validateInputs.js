export function validateInputs(inputs) {
  const [name, phone, email, cpf, lastName] = inputs;
  const errors = [];


  function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;

    return resto === parseInt(cpf[10]);
  }

  function validateNome(name) {
    return /^[A-Za-zÀ-ú\s]{6,}$/.test(name.trim());
  }


  function validatePhone(phone) {
    return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(phone.trim());
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  // Aplicar as validações
  if (!validateNome(name)) errors.push("Nome inválido.");
  if (!validateNome(lastName)) errors.push("Sobrenome inválido.");
  if (!validatePhone(phone)) errors.push("Telefone inválido.");
  if (!validateEmail(email)) errors.push("Email inválido.");
  if (!validateCPF(cpf)) errors.push("CPF inválido.");

  

 return errors;
}
