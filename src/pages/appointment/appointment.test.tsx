import * as React from 'react';
import { shallow } from 'enzyme';
import Appointment from './appointment';

describe('<Appointment />', () => {
  test('renders', () => {
    const wrapper = shallow(<Appointment />);
    expect(wrapper).toMatchSnapshot();
  });
});
  