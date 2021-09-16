import {
  initialRowType,
  RowType,
} from '../../people-grid-data/people-grid-data';
import React, {
  createContext,
  FC,
  PropsWithChildren,
  ProviderProps,
  ReactChild,
  ReactNode,
  Reducer,
  ReducerAction,
  useCallback,
  useReducer,
} from 'react';
import { PeopleReducer } from '../reducer/PeopleReducer';
import {
  IPeopleContextProps,
  IPeopleReducerAction,
  IPeopleState,
  PeopleProviderProps,
} from '../types';
import { Maybe } from 'graphql/jsutils/Maybe';

export const InitialPeopleState: IPeopleState = {
  show: false,
  person: initialRowType,
  currentPage: 1,
  characterSearch: '',
  pageSearch: 1,
};

export const initialPeopleContext: IPeopleContextProps = {
  state: { currentPage: 1 },
  getPeopleState: () => InitialPeopleState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowPerson: (x) => x,
  setPeopleData: (x) => x,
  setCurrentPage: (x) => x,
  setCharacterSearch: (x) => x,
  setPageSearch: (x) => x,
};

export const PeopleContext: React.Context<IPeopleContextProps> =
  createContext(initialPeopleContext);

export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [state, dispatch] = useReducer<
    Reducer<IPeopleState, IPeopleReducerAction>
  >(PeopleReducer, InitialPeopleState);

  const setPeopleData = useCallback(
    (data: RowType | undefined) => {
      dispatch({
        handler: 'PERSON_DATA',
        payload: { person: data },
      });
    },
    [dispatch]
  );

  const setShowPerson = useCallback(
    (data: boolean | undefined) => {
      dispatch({
        handler: 'SHOW_PERSON',
        payload: { show: data },
      });
    },
    [dispatch]
  );

  const setCurrentPage = useCallback(
    (data: number | undefined) => {
      dispatch({
        handler: 'SET_PAGE',
        payload: { currentPage: data },
      });
    },
    [dispatch]
  );

  const setCharacterSearch = useCallback(
    (data: Maybe<string> | undefined) => {
      dispatch({
        handler: 'SET_CHARACTER_SEARCH',
        payload: { characterSearch: data },
      });
    },
    [dispatch]
  );

  const setPageSearch = useCallback(
    (data: number | undefined) => {
      dispatch({
        handler: 'SET_PAGE_SEARCH',
        payload: { pageSearch: data },
      });
    },
    [dispatch]
  );

  const getPeopleState = () => state;

  const value = {
    state,
    getPeopleState,
    setShowPerson,
    setPeopleData,
    setCurrentPage,
    setCharacterSearch,
    setPageSearch,
  };
  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
