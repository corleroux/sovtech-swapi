import {
  Box,
  Button,
  Grid,
  GridProps,
  GridSizeType,
  grommet,
  Grommet,
  Heading,
  Layer,
  ResponsiveContext,
  Text,
} from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import ListItem from '../list-item/list-item';
import { List } from '../list/list';
import styled from 'styled-components';
import { PeopleContext, useFetchPersonQuery } from '@sovtech-swapi/data-access';
import { FC, useContext } from 'react';
import { FormUp, User } from 'grommet-icons';
import { deepMerge, GapType, MarginType } from 'grommet/utils';
import { Maybe } from 'graphql/jsutils/Maybe';
/* eslint-disable-next-line */
export interface PersonProps {}

const StyledPerson = styled.div`
  color: #818181;
`;

const customBreakpoints = deepMerge(hpe, {
  global: {
    breakpoints: {
      small: {
        value: 600,
      },
      medium: {
        value: 900,
      },
    },
  },
});

interface Map {
  [key: string]: [string] | [string, string];
}

interface IAreaMap {
  [key: string]: {
    name: string;
    start: [number, number];
    end: [number, number];
  }[];
}

const columns: Map = {
  small: ['auto'],
  medium: ['auto', 'auto'],
};

const rows: Map = {
  medium: ['xsmall', 'xsmall'],
  large: ['xsmall'],
  xlarge: ['xsmall'],
};

// Set the different areas you need for every size

const fixedGridAreas: IAreaMap = {
  small: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [0, 1], end: [0, 1] },
  ],

  medium: [
    { name: 'header', start: [0, 0], end: [0, 0] },
    { name: 'test', start: [1, 0], end: [1, 0] },
  ],

  // large: [
  //   { name: 'header', start: [0, 0], end: [0, 0] },
  //   { name: 'test', start: [1, 0], end: [1, 0] },
  //   { name: 'test1', start: [2, 0], end: [2, 0] },
  // ],

  // xlarge: [
  //   { name: 'header', start: [0, 0], end: [0, 0] },
  //   { name: 'test', start: [1, 0], end: [1, 0] },
  //   { name: 'test1', start: [2, 0], end: [2, 0] },
  // ],
};

interface Responsive {
  children?: React.ReactNode;
  rows?:
    | GridSizeType
    | GridSizeType[]
    | {
        size?: GridSizeType | undefined;
      }
    | undefined;
  columns?: Map;
  gap?: GapType | { row?: GapType; column?: GapType };
  areas: IAreaMap;
  margin?: MarginType;
}
const Responsive = ({ children, areas, ...props }: Responsive) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      // Take into consideration if not array is sent but a simple string

      let columnsVal;

      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal;

      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      let areasVal;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

interface IBoxInner {
  heading: string;
  content: Maybe<string> | undefined;
}
const BoxInner = (props: IBoxInner) => (
  <Box
    fill="horizontal"
    overflow="none"
    align="center"
    flex
    direction="row"
    pad="small"
  >
    <Box align="start" flex direction="column" pad="medium" margin="small">
      <Text>{props.heading}</Text>
    </Box>
    <Box align="start" flex direction="column" pad="medium" margin="medium">
      <Text textAlign="end">{props.content}</Text>
    </Box>
  </Box>
);

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
      <Grommet theme={customBreakpoints}>
        {data?.fetchPerson?.people?.map((person, index) => (
          <Box key={index}>
            <Box align="center" pad="medium">
              <User size="large" />
              <Heading level={2}>{person?.name}</Heading>
            </Box>

            <Responsive
              rows={rows}
              columns={columns}
              gap="small"
              areas={fixedGridAreas}
              margin="medium"
            >
              <Box
                gridArea="header"
                background="neutral-2"
                justify="center"
                align="center"
              >
                <BoxInner heading="Name" content={person?.name} />
                <BoxInner heading="Gender" content={person?.gender} />
                <BoxInner heading="Birth Year" content={person?.birth_year} />
              </Box>

              <Box
                gridArea="test"
                background="neutral-3"
                justify="center"
                align="center"
              >
                <BoxInner heading="Height" content={person?.height} />
                <BoxInner heading="Mass" content={person?.mass} />
                <BoxInner heading="Hair Color" content={person?.hair_color} />
                <BoxInner heading="Skin Color" content={person?.skin_color} />
                <BoxInner heading="Eye Color" content={person?.eye_color} />
              </Box>
            </Responsive>
          </Box>
        ))}
      </Grommet>

      {/* <div>
        <Box align="center" pad="medium">
          <Heading level="3"> </Heading>
        </Box>
        <List pad={{ horizontal: 'large' }}>
          <ListItem key={index} index={index}>
            <Text></Text>
            <Box></Box>
          </ListItem>
        </List>
      </div> */}
    </StyledPerson>
  );
};

export default Person;
