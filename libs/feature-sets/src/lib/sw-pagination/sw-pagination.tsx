import { Box, Button, Grommet, Pagination, Text, TextInput } from 'grommet';
import styled from 'styled-components';
import { FormNext, FormPrevious } from 'grommet-icons';

/* eslint-disable-next-line */
export interface PaginationProps {
  value: number | undefined;
  updatePage: (x: number | string) => void;
}

const StyledPagination = styled.div``;

export function SwPagination(props: PaginationProps) {
  return (
    <StyledPagination>
      <Box
        fill="vertical"
        overflow="auto"
        align="end"
        flex="grow"
        direction="column"
        justify="start"
        responsive
      >
        <Box align="center" justify="center" direction="row" pad="small">
          <Button onClick={() => props.updatePage('previous')}>
            <FormPrevious size="xlarge" />
          </Button>
          <Box
            align="center"
            justify="center"
            width="xxsmall"
            overflow="visible"
          >
            <TextInput
              size="large"
              plain
              textAlign="center"
              reverse={false}
              type="text"
              name="currentPage"
              value={props.value}
            />
          </Box>
          <Button onClick={() => props.updatePage('next')}>
            <FormNext size="xlarge" />
          </Button>
        </Box>
      </Box>
    </StyledPagination>
  );
}

export default SwPagination;
