import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Missions from '../components/Missions';
import store from '../redux/configureStore';

test('renders the home page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Missions />
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByRole('row')).toHaveTextContent(/Mission/);
});
