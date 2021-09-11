import { Box } from 'grommet';
/* eslint-disable-next-line */
export interface ListProps {
  pad: Record<string, string>;
  children: React.ReactNode;
}

export function List(props: ListProps) {
  return (
    <Box as="ul" {...props}>
      {props.children}
    </Box>
  );
}

export default List;
