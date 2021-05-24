import * as React from 'react';
import { cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// import userEvent from '@testing-library/user-event';
import Home from './index';
import { render } from '../helpers/renderWithWrapper';

test('index.tsx', () => {
  render(<Home message="Hello" />);

  const links = screen.getAllByRole('link');

  expect(links).toHaveLength(3);

  const message = screen.getAllByText('Hello');

  expect(message).toHaveLength(1);
  expect(message[0]).toBeVisible();
  expect(message[0]).toBeInTheDocument();
});
