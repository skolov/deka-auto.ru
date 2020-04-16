import * as React from 'react';
import { shallow } from 'enzyme';
import ReservMaker from './reservMaker';

describe('<ReservMaker />', () => {
  test('renders', () => {
    const wrapper = shallow(<ReservMaker />);
    expect(wrapper).toMatchSnapshot();
  });
});
  