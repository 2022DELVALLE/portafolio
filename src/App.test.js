import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio developer name', () => {
  render(<App />);
  const nameElement = screen.getByText(/KENYO/i);
  expect(nameElement).toBeInTheDocument();
});
