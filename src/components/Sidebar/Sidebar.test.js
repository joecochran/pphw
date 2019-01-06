import React from 'react';
import Sidebar from './Sidebar';
import { shallow } from 'enzyme';

describe('<Sidebar>', () => {
  const wrapper = shallow(<Sidebar />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
