import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import Missions from '../components/Missions';

const handlers = [
  rest.get('https://api.spacexdata.com/v3/missions', (req, res, ctx) => res(ctx.json([{
    mission_name: 'Thaicom',
    mission_id: '1',
    description: 'test',
    reserved: false,
  }]), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen({ onUnhandledRequest: 'bypass' }));

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives a mission after the api call', async () => {
  renderWithProviders(<Missions />);
  // Tests if mission is rendered after api call
  expect(await screen.findByText(/Thaicom/i)).toBeInTheDocument();
  // Tests join mission button
  fireEvent.click(await screen.findByRole('button'));
  expect(await screen.findByText(/ACTIVE MEMBER/i)).toBeInTheDocument();
  // Test leave mission button
  fireEvent.click(await screen.findByRole('button'));
  expect(await screen.findByText(/NOT A MEMBER/i)).toBeInTheDocument();
});
