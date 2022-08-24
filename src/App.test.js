import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './redux/configureStore';

test('full app rendering/navigating', async () => {
  const user = userEvent.setup();
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.getByText(/Rockets/)).toBeInTheDocument();

  await user.click(screen.getByText(/Missions/i));
  expect(screen.getByText(/Missions/i)).toBeInTheDocument();
  await user.click(screen.getByText(/My Profile/i));
  expect(
    screen.getByText(
      /My Rockets/i,
    ),
  ).toBeInTheDocument();
});
