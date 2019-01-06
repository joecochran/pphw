This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation
1. `git clone git@github.com:joecochran/pphw.git && cd pphw`
2. `yarn install` to install dependencies
3. `yarn start` to start the server
4. Visit http://localhost:3000 and poke around!

## Testing
1. Tests live in the same directory as their component
2. `yarn test` to run all tests!

## Notes on Homework
- I spent way too much time trying out and getting frustrated with various React drag and drop solutions before deciding to just roll my own. This probably has browser compatibility issues
- Two components got a little out of hand: `<Lane>` and `<Popup>`. I would have liked to spend some time refactoring them
- towards the end the need for Redux became obvious, but the timeline didn't allow such a significant refactor.
- setTimeout is apparently really hard to test. I ended up leaving uncovered lines in the istanbul (`yarn test --coverage`) report. I would probably want to go back and re-work those to be more testable.
