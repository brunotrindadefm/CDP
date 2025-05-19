export function validateInputs(inputs) {
  const [name, phone, email, cpf, lastName] = inputs;
  const errors = [];
  let valid = false;


  function validarCPF(cpf) {
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

  function validarNome(nome) {
    return /^[A-Za-zÀ-ú\s]{2,}$/.test(nome.trim());
  }


  function validarTelefone(telefone) {
    return /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/.test(telefone.trim());
  }

l
  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  // Aplicar as validações
  if (!validarNome(name)) errors.push("Nome inválido.");
  if (!validarNome(lastName)) errors.push("Sobrenome inválido.");
  if (!validarTelefone(phone)) errors.push("Telefone inválido.");
  if (!validarEmail(email)) errors.push("Email inválido.");
  if (!validarCPF(cpf)) errors.push("CPF inválido.");

  // Exibir resultado
  if (errors.length > 0) {
    alert("Erros encontrados:\n" + errors.join("\n"));
    return valid;
  } else {
    alert("Todos os dados são válidos!");
    valid = true;
    return valid;
  }
}
