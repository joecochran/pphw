import React from 'react';
import Draggable from './Draggable';
import { shallow } from 'enzyme';

describe('<Draggable>', () => {
  const wrapper = shallow(<Draggable handleDrop={() => {}} />);

  it('matches snapshot upon init', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
