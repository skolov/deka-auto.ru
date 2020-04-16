import * as React from 'react';
import { shallow } from 'enzyme';
import Contacts from './contacts';

describe('<Contacts />', () => {
  test('renders', () => {
    const wrapper = shallow(<Contacts />);
    expect(wrapper).toMatchSnapshot();
  });
});
  