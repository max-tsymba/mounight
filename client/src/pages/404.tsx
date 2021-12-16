import Container from '../components/container';
import React from 'react';
import error from '../assets/static/error.png';

const Page404 = () => {
  return (
    <section>
      <Container>
        <img
          style={{ width: '600px', margin: '0 auto' }}
          src={error}
          alt="error"
        />
      </Container>
    </section>
  );
};

export default Page404;
