import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    // expect(runningTotal.text()).toEqual('4');
  })

  it('should add numbers', () => {
    const add = container.find('#add');
  });

  it('should subtract numbers', () => {
    const subtract = container.find('#subtract');
  });

  it('should multiply numbers', () => {
    const multiply = container.find('#multiply');
  });

  it('should divide numbers', () => {
    const divide = container.find('#divide');
  });

  it('should number click', () => {
    const numberClick = container.find('#numberClick'); 
  });

  it('should have operator click', () => {
    const operatorClick = container.find('#operatorClick');
  });

  it('should have clear click', () => {
    const clearClick = container.find('#clearClick');
  });

})

