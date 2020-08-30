import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Luna 1',
      animal: 'Dog 1',
      breed: 'Havanese 1',
    }),
    React.createElement(Pet, {
      name: 'Luna 2',
      animal: 'Dog 2',
      breed: 'Havanese 2',
    }),
    React.createElement(Pet, {
      name: 'Luna 3',
      animal: 'Dog 3',
      breed: 'Havanese 3',
    }),
  ]);
};

render(React.createElement(App), document.getElementById('root'));
