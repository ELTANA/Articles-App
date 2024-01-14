import React from 'react';
import { PaginationProps } from './Pagination.types';
import useComponentDidUpdate from '$hooks/useComponentDidUpdate';

const Pagination: React.FC<PaginationProps> = ({ perPage, total, paginate, currentPage }) => {
  const noOfPages = Math.ceil(total / perPage);

  useComponentDidUpdate(() => {
    if (noOfPages < currentPage) paginate(noOfPages);
  }, [total]);

  return (
    <div className="flex items-center gap-2 w-full justify-center">
      <button
        className={`cursor-pointer disabled:cursor-not-allowed disabled:text-opacity-25 text-blue-950 font-normal text-base`}
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
      >
        Prev
      </button>
      {Array.from({ length: noOfPages }).map((_, index) => (
        <button
          className={`cursor-pointer w-7   h-7   flex items-center justify-center  ${currentPage === index + 1 ? 'border-blue-900' : 'border-gray-800'} border ${currentPage === index + 1 ? 'text-blue-900' : 'text-gray-800'} ${currentPage === index + 1 ? 'font-normal' : 'font-normal'} text-base`}
          key={index}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`cursor-pointer disabled:cursor-not-allowed disabled:text-opacity-25 text-blue-950 font-normal text-base`}
        disabled={currentPage === noOfPages}
        onClick={() => paginate(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
