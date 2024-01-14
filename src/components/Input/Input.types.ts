import { InputHTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IInputBaseType {
  label?: string;
  register?: UseFormRegister<FieldValues>;
  error?: FieldError;
  name: string;
}

export type InputProps = IInputBaseType & InputHTMLAttributes<HTMLInputElement>;

export type TextAreaProps = IInputBaseType & InputHTMLAttributes<HTMLTextAreaElement>;
