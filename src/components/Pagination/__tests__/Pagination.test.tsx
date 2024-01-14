import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../Pagination';
import type { PaginationProps } from '../Pagination.types';

describe('Pagination component', () => {
  const mockPaginate = jest.fn();

  const setup = (props: Partial<PaginationProps> = {}) => {
    const defaultProps: PaginationProps = {
      perPage: 5,
      total: 20,
      currentPage: 1,
      paginate: mockPaginate
      // Add any other default props here
    };

    return render(<Pagination {...defaultProps} {...props} />);
  };

  test('renders correctly with multiple pages', () => {
    const { getByText } = setup();

    expect(getByText('Prev')).toHaveAttribute('disabled');
    expect(getByText('1')).toHaveClass('border-blue-900 text-blue-900');
    expect(getByText('2')).toHaveClass('border-gray-800 text-gray-800');
    expect(getByText('3')).toHaveClass('border-gray-800 text-gray-800');
    expect(getByText('4')).toHaveClass('border-gray-800 text-gray-800');
    expect(getByText('5')).toHaveClass('border-gray-800 text-gray-800');
    expect(getByText('Next')).not.toHaveAttribute('disabled');
  });

  test('calls paginate function on button click', () => {
    const { getByText } = setup();

    fireEvent.click(getByText('2'));
    expect(mockPaginate).toHaveBeenCalledWith(2);
  });

  test('disables Prev button on the first page', () => {
    const { getByText } = setup({ currentPage: 1 });

    expect(getByText('Prev')).toHaveAttribute('disabled');
  });

  test('disables Next button on the last page', () => {
    const { getByText } = setup({ currentPage: 4 });

    expect(getByText('Next')).toHaveAttribute('disabled');
  });
});
