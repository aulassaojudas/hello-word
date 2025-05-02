// loginFields.ts
import { FieldConfig } from "../../components/FormInputs/FieldConfig";

export const loginFields = (handlers: Record<string, () => void>): FieldConfig[] => [
  {
    name: "foto",
    label: "Foto",
    type: "foto",
    gridArea: "foto"
  },
  {
    name: "nome",
    label: "Nome completo",
    required: true,
    disabled: true,
    gridArea: "nome",
  },
  {
    name: "idade",
    label: "Idade",
    type: "number",
    required: true,
    pattern: /^(1[89]|[2-9]\d)$/, // entre 18 e 99
    patternMessage: "Idade mínima é 18 anos",
    gridArea: "idade",
  },
  {
    name: "nascimento",
    label: "Data de nascimento",
    type: "date",
    required: true,
    gridArea: "nascimento",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    patternMessage: "Email inválido",
    gridArea: "email",
  },
  {
    name: "telefone",
    label: "Telefone",
    type: "tel",
    required: true,
    pattern: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
    patternMessage: "Formato: (11) 91234-5678",
    gridArea: "telefone",
  },
  {
    name: "cpf",
    label: "CPF",
    type: "text",
    required: true,
    pattern: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    patternMessage: "Formato: 000.000.000-00",
    gridArea: "cpf",
  },
  {
    name: "site",
    label: "Website",
    type: "url",
    pattern: /^(https?:\/\/)?[\w.-]+\.\w{2,}(\/\S*)?$/,
    patternMessage: "URL inválida (ex: https://exemplo.com)",
    gridArea: "site",
  },
  {
    name: "senha",
    label: "Senha",
    type: "password",
    required: true,
    pattern:
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    patternMessage:
      "Mín. 8 caracteres, com maiúscula, minúscula, número e símbolo",
      gridArea: "senha",
  },
  {
    name: "confirmaSenha",
    label: "Confirmar senha",
    type: "password",
    required: true,
    gridArea: "confirmaSenha",
  },
  {
    name: "hora",
    label: "Horário de preferência",
    type: "time",
    gridArea: "hora",
  },
  {
    name: "dataCompleta",
    label: "Data e hora do cadastro",
    type: "datetime-local",
    gridArea: "dataCompleta",
  },
  {
    name: "mes",
    label: "Mês de referência",
    type: "month",
    gridArea: "mes",
  },
  {
    name: "semana",
    label: "Semana de referência",
    type: "week",
    gridArea: "semana",
  },
  {
    name: "login",
    label: "Login",
    type: "button",
    gridArea: "login",
    onClick: handlers.handleLogin
  },
  {
    name: "cancelar",
    label: "Cancelar",
    type: "button",
    gridArea: "cancelar",
    onClick: handlers.handleCancelar
  },
];
