import React from 'react';
import renderer from 'react-test-renderer';

import { MemoryRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import Navbar from '../components/Navbar';
import Rockets from '../components/Rockets';

import store from '../redux/configureStore';

it('Navbar component test', () => {
  const navbarTest = renderer.create(<Router><Navbar /></Router>).toJSON();
  expect(navbarTest).toMatchSnapshot();
});

it('Rocket component test', () => {
  const rocketTest = renderer.create(<Provider store={store}><Router><Rockets /></Router></Provider>).toJSON();
  expect(rocketTest).toMatchSnapshot();
});
