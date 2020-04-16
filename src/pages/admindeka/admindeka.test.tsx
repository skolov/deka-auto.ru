import * as React from 'react';
import { shallow } from 'enzyme';
import Admindeka from './admindeka';

describe('<Admindeka />', () => {
  test('renders', () => {
    const wrapper = shallow(<Admindeka />);
    expect(wrapper).toMatchSnapshot();
  });
});
  