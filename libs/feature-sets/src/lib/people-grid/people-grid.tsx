import {
  FC,
  useState,
  createContext,
  useReducer,
  useContext,
  useEffect,
} from 'react';
import { DATA, columns, RowType } from './people-grid-data';
import { Box, DataTable, MouseClick, KeyPress } from 'grommet';
import styled from 'styled-components';
import {
  IPeopleState,
  PeopleContext,
  PeopleProvider,
  useFetchPeopleQuery,
} from '@sovtech-swapi/data-access';
import { Person } from '../person/person';

/* eslint-disable-next-line */
export interface PeopleGridProps {}

const StyledPeopleGrid = styled.div``;

export const PeopleGrid: FC<PeopleGridProps> = (props) => {
  const { getPeopleState, setShowPerson, setPeopleData } =
    useContext(PeopleContext);

  const [curPage, setCurPage] = useState<number>(1);

  const handleClick = (event: MouseClick<RowType> | KeyPress<RowType>) => {
    setShowPerson(true);
    setPeopleData(event.datum);
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
      </Box>
    </StyledPeopleGrid>
  );
};

export default PeopleGrid;
