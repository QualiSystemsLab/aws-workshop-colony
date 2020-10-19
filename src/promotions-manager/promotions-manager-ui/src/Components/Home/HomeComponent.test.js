import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import Home from './HomeComponent';

import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() });

describe('Home component testing', function() {
  it('renders welcome message', function() {
    //const wrapper = shallow(<Home />); 
    //const welcome = <h1>Welcome to the Promotions Manager website!</h1>;
    //expect(wrapper.contains(welcome)).to.equal(true);
  });
});