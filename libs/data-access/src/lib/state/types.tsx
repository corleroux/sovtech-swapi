import { RowType } from '../people-grid-data/people-grid-data';
import { Maybe } from 'graphql/jsutils/Maybe';

export interface IPeopleContextProps {
  state: IPeopleState;
  getPeopleState: () => IPeopleState;
  setShowPerson: (data: boolean | undefined) => void;
  setPeopleData: (data: RowType | undefined) => void;
  setCurrentPage: (data: number | undefined) => void;
  setCharacterSearch: (data: Maybe<string> | undefined) => void;
  setPageSearch: (data: number | undefined) => void;
}

export interface IPeopleState {
  show?: boolean;
  person?: RowType;
  currentPage?: number;
  characterSearch?: Maybe<string> | undefined;
  pageSearch?: number;
}

export interface IPeopleReducerAction extends IPeopleState {
  handler: string;
  payload: IPeopleState;
}

/* eslint-disable-next-line */
export interface PeopleProviderProps {
  children?: React.ReactNode;
}
