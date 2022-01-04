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
  const dispatch: any = useDispatch();
  return (
    <Modal show={show} setShow={setShow}>
      <Form title="Log In" onClose={setShow}>
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
        <Button
          onClick={() => {
            dispatch(AuthService.login(email, password)).then(
              (result: number) => {
                if (result) setShow;
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
