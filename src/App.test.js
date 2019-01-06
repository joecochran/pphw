import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';

const wrapper = shallow(<App />);
const eventMock = {
  preventDefault() {},
  dataTransfer: {
    getData() {
      return 'lane';
    },
    setData() {}
  }
}

describe('<App>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('does delayed step update', () => {
    expect(wrapper.state('step')).toBe(0);
  });

  it('shows lane drop target', () => {
    wrapper.instance().handleLaneDrag(eventMock);
    expect(wrapper.state('showLaneDropTarget')).toBe(true);
  });

  it('only adds a lane with correct data', () => {
    eventMock.dataTransfer.getData = () => 'bar';
    wrapper.instance().addLane(eventMock);
    expect(wrapper.state('lanes').length).toBe(0);
    eventMock.dataTransfer.getData = () => 'lane';
    wrapper.instance().addLane(eventMock);
    expect(wrapper.state('lanes').length).toBe(1);
  });

  it('allows bar drag', () => {
    wrapper.instance().handleBarDrag(eventMock);
    expect(wrapper).toMatchSnapshot();
  });

  it('hides drop target on drag end', () => {
    wrapper.instance().handleDragEnd(eventMock);
    expect(wrapper.state('showLaneDropTarget')).toBe(false);
  });


})



