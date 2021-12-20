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
import Input from '../input';

const Header = () => {
  const [showRegModal, setShowRegModal]: [boolean, any] = useState(false);
  const [showLoginModal, setShowLoginModal]: [boolean, any] = useState(false);
  const [username, setUsername]: [string, any] = useState('');
  const [email, setEmail]: [string, any] = useState('');
  const [password, setPassword]: [string, any] = useState('');
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

          <Modal show={showRegModal}>
            <Form
              buttonText="Sign Up"
              title="Sign Up"
              onClose={() => setShowRegModal(false)}
            >
              <Input
                value={username}
                setValue={setUsername}
                type="text"
                placeholder="Enter username"
              />
              <Input
                value={email}
                setValue={setEmail}
                type="email"
                placeholder="Enter email"
              />
              <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Enter password"
              />
            </Form>
          </Modal>

          <Modal show={showLoginModal}>
            <Form
              buttonText="Log in"
              title="Log In"
              onClose={() => setShowLoginModal(false)}
            >
              <Input
                value={email}
                setValue={setEmail}
                type="email"
                placeholder="Enter email"
              />
              <Input
                value={password}
                setValue={setPassword}
                type="password"
                placeholder="Enter password"
              />
            </Form>
          </Modal>
        </div>
      </Container>
    </header>
  );
};

export default Header;
