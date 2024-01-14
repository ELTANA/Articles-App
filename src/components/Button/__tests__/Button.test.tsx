import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../Button';

describe('Button component', () => {
  test('renders button with text', () => {
    render(<Button text="Click me" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('handles click event', () => {
    const handleClick = jest.fn();
    render(<Button text="Click me" onClick={handleClick} />);
    const buttonElement = screen.getByText('Click me');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders spinner when loading is true', () => {
    render(<Button text="Click me" loading />);
    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });

  test('applies custom class name', () => {
    render(<Button text="Click me" className="custom-class" />);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('custom-class');
  });

  test('applies additional props', () => {
    render(<Button text="Click me" data-testid="custom-button" />);
    const buttonElement = screen.getByTestId('custom-button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { asFragment } = render(<Button text="Click me" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
