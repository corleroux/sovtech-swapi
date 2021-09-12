import { Box, Heading, Text } from 'grommet';
import { ListItem } from '../list-item/list-item';
import { List } from '../list/list';
import styled from 'styled-components';
import { useFetchPeopleQuery } from '@sovtech-swapi/data-access';
import { FC, MouseEvent, useState } from 'react';

/* eslint-disable-next-line */
export interface PeopleListProps {}

const StyledPeopleList = styled.div`
  color: black;
`;

export const PeopleList: FC<PeopleListProps> = (props) => {
  const [curPage, setCurPage] = useState<number>(1);
  const { data, loading, error } = useFetchPeopleQuery();

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error - please try again later</p>;

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    console.log(e.currentTarget);
    console.log(curPage);
    setCurPage(() => curPage + 1);
    return;
  };

  console.log(data);
  return (
    <StyledPeopleList>
      <Box align="center" pad="large">
        <Heading level="3"> List & ListItem </Heading>
      </Box>
      <List pad={{ horizontal: 'large' }}>
        {data?.fetchPeople?.people?.map((person, index) => (
          <ListItem index={index} key={index} onClick={handleClick}>
            {/* {person?.name} */}
            <Text>{person?.name}</Text>
            <Box>{person?.gender}</Box>
          </ListItem>
        ))}
      </List>
    </StyledPeopleList>
  );
};

export default PeopleList;
