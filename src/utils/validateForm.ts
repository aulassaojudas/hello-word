// utils/validateForm.ts

import { FieldConfig } from "../components/FormInputs/FieldConfig";

export type ValidationErrors = Record<string, string>;

export type ComplexValidationRule = (
  form: Record<string, string>
) => ValidationErrors;

export function validateForm(
  form: Record<string, string>,
  schema: FieldConfig[],
  complexRules: ComplexValidationRule[] = []
): ValidationErrors {
  const errors: ValidationErrors = {};

  for (const field of schema) {
    const value = form[field.name]?.trim();

    if (field.required && !value) {
      errors[field.name] = "Campo obrigatório";
      continue;
    }

    if (field.pattern && value && !field.pattern.test(value)) {
      errors[field.name] = field.patternMessage ?? "Valor inválido";
      continue;
    }
  }

  for (const rule of complexRules) {
    const extraErrors = rule(form);
    Object.assign(errors, extraErrors);
  }

  return errors;
}
