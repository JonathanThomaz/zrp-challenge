import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from 'components/Header';

test('renders pokemon title', () => {
  render(<Header title="Pokemon" />);
  const linkElement = screen.getByText(/Pokemon/i);
  expect(linkElement).toBeInTheDocument();
});
