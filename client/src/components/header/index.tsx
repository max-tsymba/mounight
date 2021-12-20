import { RoutesNames } from '../../routes/index';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../button';
import Container from '../container';
// @ts-ignore
import logo from '../../assets/static/logo.svg';
// @ts-ignore
import user from '../../assets/static/user.png';
import styles from './styles.module.scss';
import Modal from '../modal';
import Form from '../form';

const Header = () => {
  const [showRegModal, setShowRegModal]: [boolean, any] = useState(false);
  const [showLoginModal, setShowLoginModal]: [boolean, any] = useState(false);
  const isAuth = false;
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__inner}>
          <NavLink to={RoutesNames.HOME}>
            <img src={logo} alt="logo" />
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
                <Button theme="light" onClick={() => setShowRegModal(true)}>
                  Sign Up
                </Button>
                <Button onClick={() => setShowLoginModal(true)}>Log in</Button>
              </>
            )}
          </div>

          <Modal show={showRegModal} onClose={() => setShowRegModal(false)}>
            <Form buttonText="Sign Up" title="Sign Up">
              <h1>Form</h1>
            </Form>
          </Modal>

          <Modal show={showLoginModal} onClose={() => setShowLoginModal(false)}>
            <Form buttonText="Log in" title="Log In">
              <h1>Form</h1>
            </Form>
          </Modal>
        </div>
      </Container>
    </header>
  );
};

export default Header;
