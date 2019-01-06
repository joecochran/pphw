import React from 'react';
import BaseButton from './BaseButton';
import { shallow } from 'enzyme';

describe('<BaseButton>', () => {
  const wrapper = shallow(<BaseButton />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
