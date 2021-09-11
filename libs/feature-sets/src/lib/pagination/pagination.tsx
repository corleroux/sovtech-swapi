import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PaginationProps {}

const StyledPagination = styled.div`
  color: pink;
`;

export function Pagination(props: PaginationProps) {
  return (
    <StyledPagination>
      <h1>Welcome to Pagination!</h1>
    </StyledPagination>
  );
}

export default Pagination;
