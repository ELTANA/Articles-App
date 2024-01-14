export type PaginationProps = {
  total: number;
  perPage: number;
  currentPage: number;
  // eslint-disable-next-line no-unused-vars
  paginate: (page: number) => void;
};
