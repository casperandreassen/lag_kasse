import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface InputFieldProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  name: string;
  placeholder: string;
  form_identifier: string;
  error_message: string | undefined;
}
