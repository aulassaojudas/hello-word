// pages/Login.tsx
import { Box } from '../../components/Box/Box';
import { FormInputs } from '../../components/FormInputs/FormInputs';
import { useUser } from '../../contexts/UserContext';
import { loginFields } from './loginFields';
import { useLoginForm } from './useLoginForm';
import './form-grid.css';

export const Login = () => {
  const { login } = useUser();
  const { form, errors, handleChange, validate, setForm } = useLoginForm();
  const handleLogin = () => {
    if (validate()) {
      login(form.nome.trim());
    }
  };
  const handleCancelar = () => {
    if (validate()) {
      login(form.nome.trim());
    }
  };
  const handleCustomChange = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
  };
  return (
    <Box className="input-row">
      <FormInputs
        schema={loginFields({ handleLogin, handleCancelar})}
        form={form}
        errors={errors}
        handleChange={handleChange}
        handleCustomChange={handleCustomChange}
      />
    </Box>
  );
};
