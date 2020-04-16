import * as React from 'react';
import { shallow } from 'enzyme';
import Amenities from './amenities';

describe('<Amenities />', () => {
  test('renders', () => {
    const wrapper = shallow(<Amenities />);
    expect(wrapper).toMatchSnapshot();
  });
});
  