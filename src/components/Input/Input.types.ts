import { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface IInputBaseType {
  label?: string;
  error?: FieldError;
  name: string;
}

export type InputProps = IInputBaseType & InputHTMLAttributes<HTMLInputElement>;

export type TextAreaProps = IInputBaseType & InputHTMLAttributes<HTMLTextAreaElement>;
