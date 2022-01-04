import AuthService from '../../services/AuthService';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button';
import Form from '../form';
import Input from '../input';
import Modal from '../modal';
import IModalProps from '../modal/types';

const SignModal = ({ show, setShow }: IModalProps) => {
  const [username, setUsername]: [string, any] = useState('');
  const [email, setEmail]: [string, any] = useState('');
  const [password, setPassword]: [string, any] = useState('');
  const [isError, setIsError]: [boolean, any] = useState(false);
  const dispatch: any = useDispatch();
  return (
    <Modal show={show} setShow={setShow} setErrors={() => setIsError(false)}>
      <Form title="Sign Up">
        <Input
          value={username}
          setValue={setUsername}
          type="text"
          placeholder="Enter username"
          setError={isError}
        />
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Enter email"
          setError={isError}
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Enter password"
          setError={isError}
        />
        <Button
          className="mt-20"
          onClick={() => {
            dispatch(AuthService.registration(username, email, password)).then(
              (result: number) => {
                if (result) {
                  setShow();
                  setIsError(false);
                } else setIsError(true);
              },
            );
          }}
        >
          Sign Up
        </Button>
      </Form>
    </Modal>
  );
};

export default SignModal;
