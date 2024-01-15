import { render, screen, waitFor } from '@testing-library/react';
import Input from '../Input';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

beforeAll(() => {
  window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
      disconnect: jest.fn(),
      observe: jest.fn(),
      unobserve: jest.fn()
    }));
});

describe('Input component', () => {
  test('renders Input with label and without error', () => {
    render(<Input label="Test Label" name="testInput" type="text" />);

    const labelElement = screen.getByText(/Test Label/i);
    const inputElement = screen.getByRole('textbox', { name: 'Test Label' });

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('renders Input with error', () => {
    render(<Input label="Test Label" name="testInput" type="text" error={{ type: 'value', message: 'Test error' }} />);

    const errorElement = screen.getByText(/Test error/i);

    expect(errorElement).toBeInTheDocument();
  });

  test('handles search input type', () => {
    render(<Input label="Search" name="searchInput" type="search" role="searchbox" />);

    const searchButton = screen.getByRole('searchbox', { name: 'Search' });

    expect(searchButton).toBeInTheDocument();
  });

  // test('handles user input', () => {
  //   const handleChange = jest.fn();
  //   render(<Input label="Test Label" name="testInput" type="text" onChange={handleChange} />);

  //   const inputElement = screen.getByRole('textbox', { name: 'Test Label' });

  //   userEvent.type(inputElement, 'Hello');

  //   expect(handleChange).toHaveBeenCalledTimes(5); // Each keystroke triggers onChange
  //   expect(inputElement).toHaveValue('Hello');
  // });

  test('handles user input', async () => {
    const handleChange = jest.fn();
    render(<Input label="Test Label" name="testInput" type="text" onChange={handleChange} />);

    const inputElement = screen.getByRole('textbox', { name: 'Test Label' });

    userEvent.type(inputElement, 'Hello');

    // Use waitFor to wait for asynchronous changes
    await waitFor(() => {
      // Expect handleChange to be called for each character in 'Hello'
      expect(handleChange).toHaveBeenCalledTimes(5);
    });

    // You can also assert the value of the input
    expect(inputElement).toHaveValue('Hello');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Input label="Test Label" name="testInput" type="text" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
