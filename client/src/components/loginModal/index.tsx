import AuthService from '../../services/AuthService';
import React, { useState } from 'react';
import Button from '../button';
import Form from '../form';
import Modal from '../modal';
import Input from '../input';
import IModalProps from '../modal/types';
import { useDispatch } from 'react-redux';

const LogModal = ({ show, setShow }: IModalProps) => {
  const [email, setEmail]: [string, any] = useState('');
  const [password, setPassword]: [string, any] = useState('');
  const [isError, setIsError]: [boolean, any] = useState(false);
  const dispatch: any = useDispatch();
  return (
    <Modal show={show} setShow={setShow} setErrors={() => setIsError(false)}>
      <Form title="Log In">
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
            dispatch(AuthService.login(email, password)).then(
              (result: number) => {
                if (result) {
                  setShow();
                  setIsError(false);
                } else setIsError(true);
              },
            );
          }}
        >
          Log In
        </Button>
      </Form>
    </Modal>
  );
};

export default LogModal;
