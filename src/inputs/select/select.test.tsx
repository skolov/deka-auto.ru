import * as React from 'react';
import { shallow } from 'enzyme';
import Select from './select';

describe('<Select />', () => {
  test('renders', () => {
    const wrapper = shallow(<Select />);
    expect(wrapper).toMatchSnapshot();
  });
});
  