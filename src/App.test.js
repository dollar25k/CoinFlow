// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoinFlow title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoinFlow/i);
    expect(titleElement).toBeInTheDocument();
});
