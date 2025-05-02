// src/types/FieldConfig.ts
export type FieldType =
  | "text"
  | "foto"
  | "button"
  | "email"
  | "tel"
  | "number"
  | "date"
  | "time"
  | "datetime-local"
  | "month"
  | "week"
  | "search"
  | "url"
  | "color"
  | "password";

export type FieldConfig = {
  name: string;
  label: string;
  type?: FieldType;

  // Para campos de entrada
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  pattern?: RegExp;
  patternMessage?: string;

  // Layout CSS grid
  gridArea?: string;

  // Para botões
  buttonType?: "submit" | "button" | "reset";
  onClick?: () => void;
};

