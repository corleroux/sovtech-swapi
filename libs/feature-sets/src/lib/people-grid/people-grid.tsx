import { FC, useState, useContext, useEffect } from 'react';
import { DATA, columns, RowType } from './people-grid-data';
import { Box, DataTable, MouseClick, KeyPress } from 'grommet';
import styled from 'styled-components';
import {
  PeopleContext,
  PeopleProvider,
  useFetchPageQuery,
  useFetchPeopleQuery,
} from '@sovtech-swapi/data-access';
import { Person } from '../person/person';
import { SwPagination } from '../sw-pagination/sw-pagination';
import { PeopleGridUi } from './people-grid-ui';

/* eslint-disable-next-line */
export interface PeopleGridProps {}

const StyledPeopleGrid = styled.div``;

export const PeopleGrid: FC<PeopleGridProps> = (props) => {
  const {
    state,
    getPeopleState,
    setShowPerson,
    setPeopleData,
    setCharacterSearch,
    setPageSearch,
    setCurrentPage,
  } = useContext(PeopleContext);

  const [curPage, setCurPage] = useState<number>(1);
  const [thisPageData, setThisPageData] = useState({});

  const handleClick = (event: MouseClick<RowType> | KeyPress<RowType>) => {
    setShowPerson(true);
    setPeopleData(event.datum);
    setCharacterSearch(event.datum.name);
  };

  const { data, loading, error } = useFetchPageQuery({
    variables: {
      fetchPagePage: curPage.toString(),
    },
  });

  useEffect(() => {
    if (state.currentPage) {
      setCurPage(state.currentPage);
    } else {
      setCurPage(1);
    }
  }, []);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;
  const tableData: RowType[] | undefined = DATA(data);

  const updatePageHandler = (page: string | number) => {
    switch (page) {
      case 'next':
        if (state.currentPage) {
          setCurrentPage(state.currentPage + 1);
          setCurPage(state.currentPage + 1);
        }
        break;
      case 'previous':
        if (state.currentPage) {
          if (state.currentPage === 1) {
            setCurrentPage(state.currentPage);
            setCurPage(state.currentPage);
          }
        }
        if (state.currentPage) {
          setCurrentPage(state.currentPage - 1);
          setCurPage(state.currentPage - 1);
        }
        break;
    }
  };

  return (
    <StyledPeopleGrid>
      <PeopleGridUi
        handleClicks={handleClick}
        tableData={tableData}
        columns={columns}
      />
      <SwPagination value={state.currentPage} updatePage={updatePageHandler} />
    </StyledPeopleGrid>
  );
};

export default PeopleGrid;
