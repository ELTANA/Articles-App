import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../Pagination';
import type { PaginationProps } from '../Pagination.types';

describe('Pagination component', () => {
  const mockPaginate = jest.fn();

  const setup = (props: Partial<PaginationProps> = {}) => {
    const defaultProps: PaginationProps = {
      perPage: 6,
      total: 24,
      currentPage: 1,
      paginate: mockPaginate
      // Add any other default props here
    };

    return render(<Pagination {...defaultProps} {...props} />);
  };

  test('renders correctly with multiple pages', () => {
    const { getByText } = setup();

    expect(getByText('Prev')).toHaveAttribute('disabled');
    expect(getByText('1')).toHaveClass(
      'cursor-pointer hover:bg-blue-500 hover:text-white disabled:hover:bg-gray-500 disabled:hover:text-gray-700 py-1 rounded-sm px-4 font-normal text-base bg-blue-800 text-white'
    );
    expect(getByText('2')).toHaveClass(
      'cursor-pointer hover:bg-blue-500 hover:text-white disabled:hover:bg-gray-500 disabled:hover:text-gray-700 py-1 rounded-sm px-4 font-normal text-base bg-blue-500 text-white'
    );
    expect(getByText('3')).toHaveClass(
      'cursor-pointer hover:bg-blue-500 hover:text-white disabled:hover:bg-gray-500 disabled:hover:text-gray-700 py-1 rounded-sm px-4 font-normal text-base bg-blue-500 text-white'
    );
    expect(getByText('Next')).not.toHaveAttribute('disabled');
  });

  test('calls paginate function on button click', () => {
    const { getByText } = setup();

    fireEvent.click(getByText('3'));
    expect(mockPaginate).toHaveBeenCalledWith(3);
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
