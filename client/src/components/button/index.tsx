import classNames from 'classnames';
import React from 'react';
import IButtonProps from './types';
import styles from './styles.module.scss';

const defaultProps: IButtonProps = {
  theme: 'dark',
};

const Button = ({ children, className, theme, ...props }: IButtonProps) => {
  const bindClasses = classNames([styles.button, [styles[theme]], className]);
  return (
    <button className={bindClasses} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
