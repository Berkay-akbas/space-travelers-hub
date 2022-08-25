import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import MissionItem from '../components/MissionItem';
import store from '../redux/configureStore';

test('renders the home page', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <table>
          <tbody>
            <MissionItem
              key="asd"
              name="asd"
              description="asd"
              id="asd"
              reserved={false}
            />
          </tbody>
        </table>
      </BrowserRouter>
    </Provider>,
  );
  expect(screen.getByRole('row')).toHaveTextContent(/Mission/);
});
