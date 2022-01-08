import Container from '../components/container';
import React from 'react';
import Input from '../components/input';
import Knob from '../components/knob';

const UserSettings = () => {
  return (
    <section>
      <Container>
        <h1 className="text-md uppercase text-center mt-20 font-bold">
          User Setting
        </h1>

        <div className="mx-auto mt-20 w-1/2 flex flex-col items-center">
          <Input type="text" placeholder="New username" />
          <Input type="text" placeholder="New password" />
          <Knob className="mt-20">Save changes</Knob>
          <button className="mt-20 text-s text-red hover:text-opacity-75 duration-300">
            Delete account
          </button>
        </div>
      </Container>
    </section>
  );
};

export default UserSettings;
