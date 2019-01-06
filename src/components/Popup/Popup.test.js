import React from 'react';
import Popup from './Popup';
import { shallow } from 'enzyme';

describe('<Popup>', () => {
  const wrapper = shallow(<Popup handleStepUpdate={() => {}} step="0" />);

  it('matches initial snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('renders on each step', () => {
    wrapper.setProps({ step: 1 });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ step: 2 });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ step: 3 });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ step: 4 });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ step: 5 });
    expect(wrapper).toMatchSnapshot();
  });

  it('closes popup', () => {
    wrapper.instance().closePopup();
    expect(wrapper).toMatchSnapshot();
  });

  it('updates message', () => {
    wrapper.instance().updateMessage();
    expect(wrapper).toMatchSnapshot();
  });
});
