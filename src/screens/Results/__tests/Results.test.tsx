import { render, screen, waitFor } from '@testing-library/react';
// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { userEvent } from '@testing-library/user-event';
import { useQuery } from '@tanstack/react-query';
import Results from '../Results';

// Mock the useQuery hook
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn()
}));

beforeAll(() => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn()
    }));
});

describe('Results component', () => {
  // Mock the query data
  const mockData = [
    { id: 1, author: 'John Doe', title: 'Article 1', email: 'john.doe@example.com', snippet: 'Snippet 1' },
    { id: 2, author: 'Jane Smith', title: 'Article 2', email: 'jane.smith@example.com', snippet: 'Snippet 2' }
  ];

  beforeEach(() => {
    // Reset mock data before each test
    jest.clearAllMocks();

    // Mock the useQuery response
    (useQuery as jest.Mock).mockReturnValue({ data: mockData, isPending: false });
  });

  test('renders the component with search and results', async () => {
    render(<Results />);

    // Check if the "Search for articles" heading is present
    expect(screen.getByText(/Search for articles/i)).toBeInTheDocument();

    // Check if the search input and search button are present
    const searchInput = screen.getByPlaceholderText('Search');
    const searchButton = screen.getByText('Search');
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();

    // Check if the "Results" heading is present
    expect(screen.getByText(/Results/i)).toBeInTheDocument();

    // Use waitFor to wait for asynchronous changes
    await waitFor(() => {
      // Check if the articles are rendered
      expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
      expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    });
  });

  // test('handles search correctly', async () => {
  //   render(<Results />);

  //   // Mock the useQuery response with an empty array to simulate no results
  //   (useQuery as jest.Mock).mockReturnValue({ data: [], isPending: false });

  //   // Fill the search input with a query
  //   userEvent.type(screen.getByPlaceholderText('Search'), 'John Doe');

  //   // Click the search button
  //   fireEvent.click(screen.getByTestId('search'));

  //   // Use waitFor to wait for asynchronous changes
  //   await waitFor(() => {
  //     // Check if the search results are displayed
  //     expect(screen.getByText(/Results for "John Doe"/i)).toBeInTheDocument();

  //     // Check if the correct search results are rendered
  //     expect(screen.getByText(/By John Doe/i)).toBeInTheDocument();
  //   });
  // });
});
