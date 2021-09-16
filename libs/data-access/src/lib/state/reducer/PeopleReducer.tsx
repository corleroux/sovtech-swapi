import { IPeopleReducerAction, IPeopleState } from '../types';

export const PeopleReducer = (
  state: IPeopleState,
  action: IPeopleReducerAction
) => {
  console.log('This is reducer', { action, state });
  const { handler } = action;
  if (handler === 'SHOW_PERSON') {
    console.log(action);
    state = { ...state, show: action.payload.show };
    return state;
  }
  if (handler === 'PERSON_DATA') {
    state = { ...state, person: action.payload.person };
  }
  if (handler === 'SET_PAGE_SEARCH') {
    state = { ...state, pageSearch: action.payload.pageSearch };
  }
  if (handler === 'SET_CHARACTER_SEARCH') {
    state = { ...state, characterSearch: action.payload.characterSearch };
  }
  if (handler === 'SET_PAGE') {
    state = { ...state, currentPage: action.payload.currentPage };
  }
  return state;
};
