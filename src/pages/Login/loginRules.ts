// utils/loginRules.ts
import {
  ValidationErrors,
  ComplexValidationRule,
} from "../../utils/validateForm";

export const loginRules: ComplexValidationRule[] = [
  (form) => {
    const errors: ValidationErrors = {};

    // 1. Confirmação de senha
    if (form.senha !== form.confirmaSenha) {
      errors.confirmaSenha = "As senhas não coincidem";
    }

    // 2. Data de nascimento futura
    if (form.nascimento) {
      const hoje = new Date().toISOString().split("T")[0];
      if (form.nascimento > hoje) {
        errors.nascimento = "Data de nascimento não pode ser no futuro";
      }
    }

    // 3. Validação de CPF
    if (form.cpf && !validarCpf(form.cpf)) {
      errors.cpf = "CPF inválido";
    }

    // 4. Idade mínima (com base na data de nascimento)
    if (form.nascimento) {
      const idade = calcularIdade(form.nascimento);
      if (idade < 18) {
        errors.nascimento = "É necessário ter pelo menos 18 anos";
      }
    }

    return errors;
  },
];

// Função auxiliar: calcular idade a partir da data de nascimento
function calcularIdade(data: string): number {
  const hoje = new Date();
  const [ano, mes, dia] = data.split("-").map(Number);
  const nascimento = new Date(ano, mes - 1, dia);

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const m = hoje.getMonth() - nascimento.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Função auxiliar: validação de CPF
function validarCpf(cpf: string): boolean {
  cpf = cpf.replace(/[^\d]+/g, "");
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

  const digito = (base: string, pesoInicial: number) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += parseInt(base[i]) * (pesoInicial - i);
    }
    const resto = (soma * 10) % 11;
    return resto === 10 ? 0 : resto;
  };

  const dig1 = digito(cpf.substring(0, 9), 10);
  const dig2 = digito(cpf.substring(0, 10), 11);

  return dig1 === parseInt(cpf[9]) && dig2 === parseInt(cpf[10]);
}
