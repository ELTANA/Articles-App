import { render, screen } from '@testing-library/react';
import Input from '../Input';
import '@testing-library/jest-dom';
import { userEvent } from '@testing-library/user-event';

describe('Input component', () => {
  test('renders Input with label and without error', () => {
    render(<Input label="Test Label" name="testInput" type="text" />);

    const labelElement = screen.getByText(/Test Label/i);
    const inputElement = screen.getByRole('textbox', { name: 'Test Label' });

    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  test('renders Input with error', () => {
    render(
      <Input label="Test Label" name="testInput" type="text" error={{ type: 'value', message: 'Error happened' }} />
    );

    const errorElement = screen.getByText(/Test error/i);

    expect(errorElement).toBeInTheDocument();
  });

  test('handles search input type', () => {
    render(<Input label="Search" name="searchInput" type="search" />);

    const searchButton = screen.getByRole('button', { name: 'Search' });

    expect(searchButton).toBeInTheDocument();
  });

  test('handles user input', () => {
    const handleChange = jest.fn();
    render(<Input label="Test Label" name="testInput" type="text" onChange={handleChange} />);

    const inputElement = screen.getByRole('textbox', { name: 'Test Label' });

    userEvent.type(inputElement, 'Hello');

    expect(handleChange).toHaveBeenCalledTimes(5); // Each keystroke triggers onChange
    expect(inputElement).toHaveValue('Hello');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Input label="Test Label" name="testInput" type="text" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
