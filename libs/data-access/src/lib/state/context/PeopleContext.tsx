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

// STATE

export interface IPeopleContextProps {
  getPeopleState: () => IPeopleState;
  setShowPerson: (data: boolean | undefined) => void;
  setPeopleData: (data: RowType | undefined) => void;
}

export const InitialPeopleState: IPeopleState = {
  show: false,
  person: initialRowType,
};

export const initialPeopleContext: IPeopleContextProps = {
  getPeopleState: () => InitialPeopleState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setShowPerson: (x) => x,
  setPeopleData: (x) => x,
};

export const PeopleContext: React.Context<IPeopleContextProps> =
  createContext(initialPeopleContext);

// const SHOW_PERSON = 'LOADING';
// const PERSON_DATA = 'PERSON_DATA';

export interface IPeopleState {
  show?: boolean;
  person?: RowType;
}

export interface IPeopleReducerAction extends IPeopleState {
  handler: string;
  payload: IPeopleState;
}

const reducer = (state: IPeopleState, action: IPeopleReducerAction) => {
  console.log('This is reducer', { action, state });
  const { handler } = action;
  //console.log(show);
  if (handler === 'SHOW_PERSON') {
    console.log(action);
    state.show = action.payload.show;
    return state;
  }
  if (handler === 'PERSON_DATA') {
    state.person = action.payload.person;
  }
  return state;
};

/* eslint-disable-next-line */
export interface PeopleProviderProps {
  children?: React.ReactNode;
}
//  type Provider<T> = ProviderExoticComponent<ProviderProps<T>>;
export const PeopleProvider = ({ children }: PeopleProviderProps) => {
  const [state, dispatch] = useReducer<
    Reducer<IPeopleState, IPeopleReducerAction>
  >(reducer, InitialPeopleState);

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

  const getPeopleState = () => state;

  const value = { getPeopleState, setShowPerson, setPeopleData };
  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};
