import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer component', () => {
  test('renders footer with the correct text', () => {
    render(<Footer />);
    const footerElement = screen.getByText(/© 2024 Articles App — Lotanna Kyrian/i);
    expect(footerElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });
});
