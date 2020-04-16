import * as React from 'react';
import { shallow } from 'enzyme';
import ServiceMaker from './serviceMaker';

describe('<ServiceMaker />', () => {
  test('renders', () => {
    const wrapper = shallow(<ServiceMaker />);
    expect(wrapper).toMatchSnapshot();
  });
});
  