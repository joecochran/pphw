import React from 'react';
import Bar from './Bar';
import { shallow } from 'enzyme';

describe('<Bar>', () => {
  const wrapper = shallow(<Bar handleDrop={() => {}} />);
  const eventMock = {
    preventDefault: () => {}
  }

  it('matches snapshot upon init', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('matches snapshot after drop', () => {
    wrapper.simulate('dragenter', eventMock);
    wrapper.simulate('dragover', eventMock);
    wrapper.simulate('drop', eventMock);
    expect(wrapper).toMatchSnapshot();
  })
})
