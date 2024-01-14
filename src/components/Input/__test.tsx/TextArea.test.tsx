import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import TextArea from '../TextArea';
import '@testing-library/jest-dom';

describe('TextArea component', () => {
  test('renders TextArea with label and without error', () => {
    render(<TextArea label="Test Label" name="testTextArea" />);

    const labelElement = screen.getByText(/Test Label/i);
    const textAreaElement = screen.getByRole('textbox', { name: 'Test Label' });

    expect(labelElement).toBeInTheDocument();
    expect(textAreaElement).toBeInTheDocument();
  });

  test('renders TextArea with error', () => {
    render(<TextArea label="Test Label" name="testTextArea" error={{ type: 'value', message: 'Error happened' }} />);

    const errorElement = screen.getByText(/Test error/i);

    expect(errorElement).toBeInTheDocument();
  });

  test('handles user input', () => {
    const handleChange = jest.fn();
    render(<TextArea label="Test Label" name="testTextArea" onChange={handleChange} />);

    const textAreaElement = screen.getByRole('textbox', { name: 'Test Label' });

    userEvent.type(textAreaElement, 'Hello');

    expect(handleChange).toHaveBeenCalledTimes(5); // Each keystroke triggers onChange
    expect(textAreaElement).toHaveValue('Hello');
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<TextArea label="Test Label" name="testTextArea" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
