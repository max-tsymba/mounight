import { ReactNode } from 'react';

export default interface IModalProps {
  children?: string | ReactNode;
  show: boolean;
  onClose: any;
}
