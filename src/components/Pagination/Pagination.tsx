import React from 'react';
import { PaginationProps } from './Pagination.types';
import useComponentDidUpdate from '$hooks/useComponentDidUpdate';

const Pagination: React.FC<PaginationProps> = ({ perPage, total, paginate, currentPage }) => {
  const noOfPages = Math.ceil(total / perPage);

  useComponentDidUpdate(() => {
    if (noOfPages < currentPage) paginate(noOfPages);
  }, [total]);

  return (
    <div className="flex items-center gap-2 w-full justify-center my-8">
      <button
        className={`cursor-pointer disabled:cursor-not-allowed bg-blue-500 text-white hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-gray-400 disabled:hover:text-gray-500 font-normal text-base py-1 px-4 rounded-sm`}
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
      >
        Prev
      </button>
      {Array.from({ length: noOfPages }).map((_, index) => (
        <button
          className={`cursor-pointer hover:bg-blue-500 hover:text-white disabled:hover:bg-gray-500 disabled:hover:text-gray-700 py-1 rounded-sm px-4 font-normal text-base  ${currentPage === index + 1 ? 'bg-blue-800 text-white' : 'bg-blue-500 text-white'}`}
          key={index}
          onClick={() => paginate(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        className={`cursor-pointer disabled:cursor-not-allowed bg-blue-500 text-white hover:bg-blue-500 hover:text-white disabled:bg-gray-300 disabled:text-gray-400 disabled:hover:bg-gray-400 disabled:hover:text-gray-500 font-normal text-base py-1 px-4 rounded-sm`}
        disabled={currentPage === noOfPages}
        onClick={() => paginate(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
