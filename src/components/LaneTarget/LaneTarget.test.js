import React from 'react';
import LaneTarget from './LaneTarget';
import { shallow } from 'enzyme';

describe('<LaneTarget>', () => {
  const wrapper = shallow(<LaneTarget />);

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot after drop', () => {
    wrapper.simulate('dragenter', {
      preventDefault: () => {

      }
    });
    wrapper.simulate('dragover', {
      preventDefault: () => {

      }
    });
    wrapper.simulate('drop', {
      preventDefault: () => {

      }
    });
    expect(wrapper).toMatchSnapshot();
  });
});
