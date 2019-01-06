import addLaneImg from './add-lane.svg';
import addBarImg from './add-bar.svg';

export default [
  {
    image: addLaneImg,
    title: 'We\'ll start with a lane',
    message: 'Lanes represent high level categories, such as teams, product lines, or strategic initiatives. Add a color and description to your lane to communicate valuable details to stakeholders.',
    action: 'Drag and drop a lane to get started'
  },
  {
    image: addBarImg,
    title: 'Awesome! Now let\'s add a few bars.',
    message: 'Bars are your specific initiative. Use them to represent your epics, projects, or taks, and provide an at a glance view of priority, relationships and progress.',
    action: 'Drag and drop a bar to get started'
  },
  {
    image: false,
    title: 'Alright let\'s set up a couple more',
    message: 'Once they\'re added, you can share out your roadmap with your team.',
    action: false
  },
]
