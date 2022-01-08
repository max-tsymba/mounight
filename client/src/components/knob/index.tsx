import classNames from 'classnames';
import React from 'react';
import { IKnobProps } from './types';
import styles from './styles.module.scss';

const Knob = ({ children, className, onClick }: IKnobProps) => {
  const classes = classNames([styles.knob, className]);
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Knob;
