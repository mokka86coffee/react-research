import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const sum = (a,b) => a + b;


describe('tests', () => {
  it('first test', () => {
    expect(sum(1,2)).toEqual(3);
    //ожидание
  })
}

);
