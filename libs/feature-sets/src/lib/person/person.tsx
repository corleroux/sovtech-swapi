import { Box, Button, grommet, Grommet, Heading, Layer, Text } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import ListItem from '../list-item/list-item';
import { List } from '../list/list';
import styled from 'styled-components';
import { PeopleContext, useFetchPersonQuery } from '@sovtech-swapi/data-access';
import { FC, useContext } from 'react';
import { FormUp } from 'grommet-icons';
/* eslint-disable-next-line */
export interface PersonProps {}

const StyledPerson = styled.div`
  color: #818181;
`;

export const Person: FC<PersonProps> = (props) => {
  const { state, getPeopleState, setShowPerson } = useContext(PeopleContext);
  const compState = () => getPeopleState();
  const { show, person, characterSearch } = compState();
  const { data, loading, error } = useFetchPersonQuery({
    variables: {
      name: characterSearch,
    },
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;
  console.log(data);

  return (
    <StyledPerson>
      <Box align="left" pad="small">
        <Box overflow="hidden" background="neutral-1">
          <Button
            icon={<FormUp />}
            label="Back"
            hoverIndicator
            onClick={() => {
              setShowPerson(false);
            }}
          />
        </Box>
      </Box>
      {data?.fetchPerson?.people?.map((person, index) => (
        <div key={index}>
          <Box align="center" pad="large">
            <Heading level="3"> {person?.name} </Heading>
          </Box>
          <List pad={{ horizontal: 'large' }}>
            <ListItem key={index} index={index}>
              <Text>{person?.name}</Text>
              <Box>{person?.gender}</Box>
            </ListItem>
          </List>
        </div>
      ))}
    </StyledPerson>
  );
};

export default Person;
