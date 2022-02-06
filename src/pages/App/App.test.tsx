import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
describe('App', () => {
  it('renders application title', () => {
    render(<App />);
    const linkElement = screen.getByText(/Covid-19 Local Updates - München/i);
    expect(linkElement).toBeInTheDocument();
  });
})
