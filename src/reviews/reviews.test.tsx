import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './reviews';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reviews />, div);
  ReactDOM.unmountComponentAtNode(div);
});
