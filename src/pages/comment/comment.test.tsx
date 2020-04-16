import * as React from 'react';
import { shallow } from 'enzyme';
import Comment from './comment';

describe('<Comment />', () => {
  test('renders', () => {
    const wrapper = shallow(<Comment />);
    expect(wrapper).toMatchSnapshot();
  });
});
  