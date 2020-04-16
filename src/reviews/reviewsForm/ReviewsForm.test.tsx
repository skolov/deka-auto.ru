import * as React from 'react';
import { shallow } from 'enzyme';
import ReviewsForm from './ReviewsForm';

describe('<ReviewsForm />', () => {
  test('renders', () => {
    const wrapper = shallow(<ReviewsForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
  