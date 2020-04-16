import React from 'react';
import ReactDOM from 'react-dom';
import Services from './services';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Services />, div);
  ReactDOM.unmountComponentAtNode(div);
});
