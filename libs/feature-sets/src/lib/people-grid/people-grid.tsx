import { FC, useState } from 'react';
import { DATA, columns, RowType } from './people-grid-data';
import { Box, DataTable, MouseClick, KeyPress } from 'grommet';
import styled from 'styled-components';
import { useFetchPeopleQuery } from '@sovtech-swapi/data-access';

/* eslint-disable-next-line */
export interface PeopleGridProps {}

const StyledPeopleGrid = styled.div``;

export const PeopleGrid: FC<PeopleGridProps> = (props) => {
  const [show, setShow] = useState(false);
  const [clicked, setClicked] = useState({});
  const [curPage, setCurPage] = useState<number>(1);

  const handleClick = (event: MouseClick<RowType> | KeyPress<RowType>) => {
    setShow(true);
    setClicked(event.datum);
  };

  const { data, loading, error } = useFetchPeopleQuery();
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;
  const tableData: RowType[] | undefined = DATA(data);

  return (
    <StyledPeopleGrid>
      <Box align="center" pad="large">
        <DataTable
          columns={columns}
          data={tableData}
          step={10}
          sortable
          paginate
          onClickRow={(event) => {
            handleClick(event);
          }}
        />
        {show && null}
      </Box>
    </StyledPeopleGrid>
  );
};

export default PeopleGrid;
