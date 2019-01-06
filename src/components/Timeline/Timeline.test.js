import React from 'react';
import Timeline from './Timeline';
import { shallow } from 'enzyme';

describe('<Timeline>', () => {
  const wrapper = shallow(<Timeline />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
