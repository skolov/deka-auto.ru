import React from 'react';
import ReactDOM from 'react-dom';
import Contacts from './contacts';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Contacts />, div);
  ReactDOM.unmountComponentAtNode(div);
});
