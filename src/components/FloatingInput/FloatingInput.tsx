import './FloatingInput.css';

type FloatingInputProps = {
  label: string;
  error?: boolean;
  helperText?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>; // <- inclui todos os atributos padrão

export function FloatingInput({
  label,
  type = 'text',
  name,
  value,
  defaultValue,
  onChange,
  required = false,
  error = false,
  helperText = '',
  className = '',
  ...rest // <- pega os extras como disabled, readOnly, max, min etc.
}: FloatingInputProps) {
  const isNumeric = type === 'number';

  return (
    <div className={`floating-input-group ${error ? 'error' : ''} ${className}`}>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        required={required}
        className={`floating-input ${isNumeric ? 'numeric' : ''}`}
        autoComplete="off"
        placeholder=" "
        {...(isNumeric && { step: 'any', inputMode: 'decimal' })}
        {...rest} // <- permite usar disabled, readOnly, maxLength, etc.
      />
      <label htmlFor={name} className="floating-label">
        {label}
      </label>
      {helperText && (
        <small className={`helper-text ${error ? 'error-text' : ''}`}>
          {helperText}
        </small>
      )}
    </div>
  );
}
