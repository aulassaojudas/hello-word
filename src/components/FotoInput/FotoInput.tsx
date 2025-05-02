import { useRef, useState } from 'react';
import './FotoInput.css';

interface FotoInputProps {
  value?: string;
  onChange: (base64: string) => void;
  name?: string;
}

export const FotoInput = ({ value, onChange, name }: FotoInputProps) => {
  const [preview, setPreview] = useState<string | null>(value ?? null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result as string;
      setPreview(base64);
      onChange(base64);
    };
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const getInitials = (nome?: string) => {
    if (!nome) return '';
    return nome
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join('');
  };

  return (
    <>
      <div className="fotoContainer">
        <div className="fotoBox" onClick={handleClick}>
          {preview ? (
            <img src={preview} alt="Foto" className="fotoImg" />
          ) : (
            <span className="fotoFallback">{getInitials(name)}</span>
          )}
        </div>
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFile}
        ref={inputRef}
        className="fotoInput"
      />
    </>
  );
};
