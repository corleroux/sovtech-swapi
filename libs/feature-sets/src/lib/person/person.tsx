import { Box, Button, Heading, Layer, Text } from 'grommet';
import ListItem from '../list-item/list-item';
import { List } from '../list/list';
import styled from 'styled-components';
import { useFetchPersonQuery } from '@sovtech-swapi/data-access';
import { FC } from 'react';

/* eslint-disable-next-line */
export interface PersonProps {}

const StyledPerson = styled.div`
  color: #818181;
`;

export const Person: FC<PersonProps> = (props) => {
  const { data, loading, error } = useFetchPersonQuery({
    variables: {
      name: 'Luke Skywalker',
    },
  });
  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;
  console.log(data);

  return (
    <StyledPerson>
      <Layer
        position="center"
        onEsc={() => setShow(false)}
        onClickOutside={() => setShow(false)}
      >
        <Box margin="medium">
          <Text>{clicked && JSON.stringify(clicked, null, 2)}</Text>
          <Button
            margin={{ top: 'medium' }}
            label="close"
            onClick={() => setShow(false)}
          />
        </Box>
      </Layer>
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
