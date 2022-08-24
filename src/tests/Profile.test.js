import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Profile from '../components/Profile';
import store from '../redux/configureStore';

test('renders the home page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Profile />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getAllByRole('heading')).toHaveLength(2);
});
