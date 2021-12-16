import Hero from '../components/hero';
import React, { FunctionComponent } from 'react';

const Home: FunctionComponent = () => {
  return (
    <div>
      <Hero
        title="Mounight"
        subtitle="Explore over 5,000,000 photos of artist from around the world"
      />
    </div>
  );
};

export default Home;
