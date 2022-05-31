import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

//The purpose of these tests is to ensure correct rendering of the component
//This type of testing is called unit testing
//This is called a test suite
test('renders sword art gamers header', () => {
  render(<App />);
  const linkElement = screen.getByText(/sword art gamers/i);
  expect(linkElement).toBeInTheDocument();
});
