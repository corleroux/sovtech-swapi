import { useContext, useEffect, useState } from 'react';
import { IPeopleState, PeopleContext } from '@sovtech-swapi/data-access';
import { PeopleGrid, Person } from '@sovtech-swapi/feature-sets';

/* eslint-disable-next-line */
export interface SwpeopleProps {}

export function Swpeople(props: SwpeopleProps) {
  const { getPeopleState } = useContext(PeopleContext);
  const state = () => getPeopleState();

  return (
    <Swpeople>
      <PeopleGrid />
      {!state().show && <PeopleGrid />}
      {state().show && <Person />}
    </Swpeople>
  );
}

export default Swpeople;
