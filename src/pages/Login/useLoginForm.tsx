// pages/useLoginForm.tsx
import { useState } from 'react';
import { loginFields } from './loginFields';
import { validateForm, ValidationErrors } from '../../utils/validateForm';
import { loginRules } from './loginRules';

export const useLoginForm = () => {
  const [form, setForm] = useState<Record<string, string>>({
    nome: '',
    idade: '',
    email: '',
    telefone: '',
    cpf: '',
    site: '',
    senha: '',
    confirmaSenha: '',
    nascimento: '',
    hora: '',
    dataCompleta: '',
    mes: '',
    semana: '',
    foto: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // limpa erro ao digitar
  };

  const validate = () => {
    const schema = loginFields({}).filter(field => field.type !== 'button');
    const validationResult = validateForm(form, schema, loginRules);
    setErrors(validationResult);
    return Object.keys(validationResult).length === 0;
  };

  return { form, errors, handleChange, validate, setForm };
};
