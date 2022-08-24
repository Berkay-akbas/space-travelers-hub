import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import App from '../App';

const handlers = [
  rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => res(ctx.json([{
    mission_name: 'Thaicom',
    mission_id: '1',
    description: 'test',
    reserved: false,
  }]), ctx.delay(150))),
  rest.get('https://api.spacexdata.com/v3/rockets', (req, res, ctx) => res(ctx.json([{
    id: 1,
    rocket_name: 'Falcon 1',
    description: 'test',
    flickr_images: 'test',
    reserved: false,
  }]), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('My profile should show joined rocket', async () => {
  renderWithProviders(<App />);
  // Mock reserve rocket button click
  fireEvent.click(await screen.findByRole('button'));
  // Switch to Profile page
  fireEvent.click(await screen.findByText('My Profile'));
  // Expect My profile to contain the selected rocket
  expect(await screen.findByText(/Falcon 1/i)).toBeInTheDocument();
});

test('My profile should show joined mission', async () => {
  renderWithProviders(<App />);
  // Switch to Missions page
  fireEvent.click(await screen.findByText('Missions'));
  // Mock join button click
  fireEvent.click(await screen.findByRole('button'));
  // Switch to Profile page
  fireEvent.click(await screen.findByText('My Profile'));
  // Expect My profile to contain mission
  expect(await screen.findByText(/Thaicom/i)).toBeInTheDocument();
});
