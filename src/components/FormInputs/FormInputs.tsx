
import { FieldConfig } from './FieldConfig';
import { FloatingInput } from '../../components/FloatingInput/FloatingInput';
import { FotoInput } from '../FotoInput/FotoInput';

interface Props {
  schema: FieldConfig[];
  form: Record<string, string>;
  errors: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCustomChange?: (name: string, value: string) => void;
}

export const FormInputs = ({
  schema,
  form,
  errors,
  handleChange,
  handleCustomChange = () => { }
}: Props) => {
  return (
    <div className="form-grid" style={{ display: 'grid', gap: '1rem' }}>
      {schema.map((field) => {
        const {
          name,
          label,
          type = 'text',
          required,
          disabled,
          readOnly,
          gridArea,
          buttonType = 'button',
          onClick
        } = field;

        const style = gridArea ? { gridArea } : {};

        if (type === 'foto') {
          return (
            <div key={name} style={style}>
              <div
                style={{
                  width: 160,
                  height: 160,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #ccc',
                  borderRadius: '8px'
                }}
              >
                <FotoInput
                  value={form[name]}
                  name={form.nome}
                  onChange={(base64) => handleCustomChange(name, base64)}
                />
              </div>
            </div>
          );
        }

        if (type === 'button') {
          return (
            <div key={name} style={style}>
              <button className='form-button'
                type={buttonType}
                onClick={onClick}
                disabled={disabled}
              >
                {label}
              </button>
            </div>
          );
        }

        return (
          <div key={name} style={style}>
            <FloatingInput
              name={name}
              label={label}
              type={type}
              value={form[name]}
              onChange={handleChange}
              required={required}
              disabled={disabled}
              readOnly={readOnly}
              error={!!errors[name]}
              helperText={errors[name]}
            />
          </div>
        );
      })}
    </div>
  );
};
