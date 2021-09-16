import { PeopleContext } from '@sovtech-swapi/data-access';
import { Person } from '../person/person';
import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { PeopleGrid } from '../people-grid/people-grid';
/* eslint-disable-next-line */
export interface StarwarsProps {}

const StyledStarwars = styled.div``;

export function Starwars(props: StarwarsProps) {
  const { state, getPeopleState } = useContext(PeopleContext);
  console.log(getPeopleState());
  console.log('STATE', state);
  const stateC = () => getPeopleState();
  const { show, person } = stateC();
  console.log('SHOW', { show, person });

  useEffect(() => {
    console.log('STARWARS RENDER');
  }, [state]);

  return (
    <StyledStarwars>
      {!show && <PeopleGrid />}
      {show && <Person />}
    </StyledStarwars>
  );
}

export default Starwars;
