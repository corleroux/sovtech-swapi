import React, { useEffect, useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Box, Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { PeopleList, Heading, Person } from '@sovtech-swapi/feature-sets';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:3333/graphql',
});

export const App = () => {
  // const [m, setMessage] = useState<Message>({ message: '' });

  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);

  return (
    <ApolloProvider client={client}>
      <Grommet theme={hpe}>
        <Box>
          <Heading />
          <PeopleList />
          <Person />
        </Box>
      </Grommet>
    </ApolloProvider>
  );
};

export default App;
