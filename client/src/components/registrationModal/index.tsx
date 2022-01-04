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
  const dispatch: any = useDispatch();
  return (
    <Modal show={show} setShow={setShow}>
      <Form title="Sign Up" onClose={setShow}>
        <Input
          setValue={setUsername}
          type="text"
          placeholder="Enter username"
        />
        <Input setValue={setEmail} type="email" placeholder="Enter email" />
        <Input
          setValue={setPassword}
          type="password"
          placeholder="Enter password"
        />
        <Button
          onClick={() => {
            dispatch(AuthService.registration(username, email, password)).then(
              (result: number) => {
                if (result) setShow;
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
