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
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers together', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonPlus = container.find('#operator_add');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    buttonPlus.simulate('click')
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  });

  it('should subtract two numbers', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonMinus = container.find('#operator-subtract');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonMinus.simulate('click');
    button4.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  it('should multiply two numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonTimes = container.find('#operator-multiply');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonTimes.simulate('click');
    button5.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  });

  it('should divide two numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEquals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEquals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  });

  xit('should number click', () => {
    const numberClick = container.find('#numberClick'); 
  });

  xit('should have operator click', () => {
    const operatorClick = container.find('#operatorClick');
  });

  xit('should have clear click', () => {
    const clearClick = container.find('#clearClick');
  });

})

