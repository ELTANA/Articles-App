import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '..//Header';

describe('Header component', () => {
  test('renders Header with correct content and links', () => {
    render(<Header />);

    // Check for the logo and "Articles" text in the link
    const logoElement = screen.getByTestId('articles-logo');
    const articlesTextElement = screen.getByText(/Articles/i);

    expect(logoElement).toBeInTheDocument();
    expect(articlesTextElement).toBeInTheDocument();

    // Check for "Results" link
    const resultsLinkElement = screen.getByText(/Results/i);
    expect(resultsLinkElement).toBeInTheDocument();

    // Check for "Create" link
    const createLinkElement = screen.getByText(/Create/i);
    expect(createLinkElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Header />);
    expect(asFragment()).toMatchSnapshot();
  });
});
