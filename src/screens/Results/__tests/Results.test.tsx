import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Results from '../Results';
import { useQuery } from '@tanstack/react-query';
import * as articleModule from '$network/article';
import '@testing-library/jest-dom';
import { Article } from '$utils/global.types';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn()
}));

describe('Results component', () => {
  test('submits search form and updates results', async () => {
    // Mocking useQuery response
    const articlesMock: Article[] = [
      { id: '1', author: 'John Doe', title: 'Test Article 1', email: 'john.doe@example.com', snippet: 'Snippet 1' }
      // Add more mock articles as needed
    ];

    (useQuery as jest.Mock).mockReturnValue({
      data: articlesMock,
      isPending: false
    });

    // Render the component
    render(<Results />);

    // Mocking getArticles response
    const getArticlesMock = jest.fn().mockResolvedValue(articlesMock);
    jest.spyOn(articleModule, 'getArticles').mockImplementation(getArticlesMock);

    // Fill and submit the search form
    const searchInput = screen.getByPlaceholderText(/Search/i);
    const searchButton = screen.getByRole('button', { name: /Search/i });

    fireEvent.change(searchInput, { target: { value: 'John' } });
    fireEvent.click(searchButton);

    // Wait for the component to update with search results
    await waitFor(() => {
      expect(getArticlesMock).toHaveBeenCalledWith();
      // Add more assertions based on the expected behavior after search
    });
  });
});
