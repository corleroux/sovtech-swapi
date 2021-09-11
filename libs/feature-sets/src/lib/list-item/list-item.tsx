import { Box } from 'grommet';
import { MouseEvent } from 'react';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ListItemProps {
  index: number | undefined;
  key: number | undefined;
  children: React.ReactNode;
  onClick?: any;
}

const StyledListItem = styled.div`
  color: pink;
`;

export const ListItem = (props: ListItemProps) => (
  <Box
    as="li"
    border={props.index ? 'bottom' : 'horizontal'}
    pad="small"
    direction="row"
    justify="between"
    {...props}
  />
);
export default ListItem;
