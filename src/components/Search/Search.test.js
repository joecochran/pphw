import React from 'react';
import Search from './Search';
import { shallow } from 'enzyme';

describe('<Search>', () => {
  const wrapper = shallow(<Search />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
