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
  console.log('GRID RENDER');
  const { getPeopleState, setShowPerson, setPeopleData } =
    useContext(PeopleContext);
  const state = (): IPeopleState => getPeopleState();
  const { show, person } = state();
  // useEffect(() => {
  //   console.log('Effect', state);
  // }, [state]);

  const [curPage, setCurPage] = useState<number>(1);
  // const showPerson = () => setShowPerson(true);

  const handleClick = (event: MouseClick<RowType> | KeyPress<RowType>) => {
    setShowPerson(true);
    setPeopleData(event.datum);
  };

  const { data, loading, error } = useFetchPeopleQuery();
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;
  const tableData: RowType[] | undefined = DATA(data);
  console.log('SHOW', show);
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
      {show && <Person></Person>}
    </StyledPeopleGrid>
  );
};

export default PeopleGrid;
