import styled from 'styled-components';
import { useFetchPeopleQuery } from '@sovtech-swapi/data-access';

/* eslint-disable-next-line */
export interface PeopleListProps {}

const StyledPeopleList = styled.div`
  color: pink;
`;

export function PeopleList(props: PeopleListProps) {
  const { data, loading, error } = useFetchPeopleQuery();
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;

  console.log(data);
  return (
    <StyledPeopleList>
      <h1>Star Wars People:</h1>
      <ul>
        {data?.fetchPeople?.people?.map((k, i) => (
          <li key={i}>{k?.name}</li>
        ))}
      </ul>
    </StyledPeopleList>
  );
}

export default PeopleList;
