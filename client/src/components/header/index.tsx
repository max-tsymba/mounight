import { RoutesNames } from '../../routes/index';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button';
import Container from '../container';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import logo from '../../assets/static/logo.svg';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <NavLink to={RoutesNames.HOME}>
            <img src={logo} alt="" />
          </NavLink>

          <div className={styles.header__btns}>
            <Button theme="light">Sign Up</Button>
            <Button>Log in</Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
