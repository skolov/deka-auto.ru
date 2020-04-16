import React from 'react';
import ReactDOM from 'react-dom';
import Text from './text';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Text />, div);
  ReactDOM.unmountComponentAtNode(div);
});
