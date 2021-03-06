import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Kiko" animal="Cat" breed="Mixed" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
