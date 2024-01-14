import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'resize-observer-polyfill';
import ArticleCard from '../ArticleCard';

const mockArticle = {
  author: 'John Doe',
  email: 'john@example.com',
  snippet: 'This is a test snippet for the article card.',
  title: 'Test Article'
};

test('renders ArticleCard component with truncated text initially', () => {
  render(<ArticleCard {...mockArticle} />);

  const truncatedSnippet = 'This is a test snippet for...';
  const readMoreButton = screen.getByText('Read more');

  expect(screen.getByText(mockArticle.title)).toBeInTheDocument();
  expect(screen.getByText(truncatedSnippet)).toBeInTheDocument();
  expect(readMoreButton).toBeInTheDocument();
});

test('expands and collapses the article snippet on button click', () => {
  render(<ArticleCard {...mockArticle} />);

  const readMoreButton = screen.getByText('Read more');

  fireEvent.click(readMoreButton);

  const fullSnippet = 'This is a test snippet for the article card.';
  const readLessButton = screen.getByText('Read less');

  expect(screen.getByText(fullSnippet)).toBeInTheDocument();
  expect(readLessButton).toBeInTheDocument();

  fireEvent.click(readLessButton);

  const truncatedSnippet = 'This is a test snippet for...';

  expect(screen.getByText(truncatedSnippet)).toBeInTheDocument();
  expect(readMoreButton).toBeInTheDocument();
});
