import { ReactNode } from 'react';

export default interface IFormProps {
  children?: string | ReactNode;
  buttonText: string;
  onSubmit?: any;
  title: string;
  onClose: any;
}
