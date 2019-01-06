import React from 'react';
import Lane from './Lane';
import { shallow } from 'enzyme';

describe('<Lane>', () => {
  const wrapper = shallow(<Lane handleStepUpdate={() => {}}/>);
  const eventMock = {
    preventDefault: () => {}
  }

  it('matches snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with no bars', () => {
    wrapper.simulate('dragenter', eventMock);
    wrapper.simulate('dragover', eventMock);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with 1 bar', () => {
    wrapper.setState({bars: 1});
    wrapper.simulate('dragenter', eventMock);
    wrapper.simulate('dragover', eventMock);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with 2 bars', () => {
    wrapper.setState({bars: 2});
    wrapper.simulate('dragenter', eventMock);
    wrapper.simulate('dragover', eventMock);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot when collapsed', () => {
    wrapper.find('.c-lane__header').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot when collapsed', () => {
    wrapper.find('.c-lane__header').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('updates bars on drop', () => {
    wrapper.setState({ bars: 1 });
    wrapper.instance().handleDrop(eventMock);
    expect(wrapper.state('bars')).toEqual(2);
  });
});
