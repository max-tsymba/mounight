import { RoutesNames } from '../../routes/index';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button';
import Container from '../container';
// @ts-ignore
import logo from '../../assets/static/logo.svg';
// @ts-ignore
import user from '../../assets/static/user.png';
import styles from './styles.module.scss';

const Header = () => {
  const isAuth = true;
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <NavLink to={RoutesNames.HOME}>
            <img src={logo} alt="" />
          </NavLink>

          <div className={styles.header__btns}>
            {isAuth ? (
              <>
                <NavLink
                  to={RoutesNames.USER_PAGE}
                  className={styles.header__account}
                >
                  <img src={user} alt="" />
                </NavLink>
                <NavLink to={RoutesNames.USER_PAGE}>
                  <Button>Upload Image</Button>
                </NavLink>
              </>
            ) : (
              <>
                <Button theme="light">Sign Up</Button>
                <Button>Log in</Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
