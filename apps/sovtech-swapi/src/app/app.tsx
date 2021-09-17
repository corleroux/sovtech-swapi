import React, { useEffect, useState } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Box, Grommet } from 'grommet';
import { hpe } from 'grommet-theme-hpe';
import { Heading, Starwars } from '@sovtech-swapi/feature-sets';
import { PeopleProvider } from '@sovtech-swapi/data-access';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://sovtech-swapi-api.collectif.link:3333/graphql',
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Grommet theme={hpe}>
        <PeopleProvider>
          <Box>
            <Heading />
            <Starwars />
          </Box>
        </PeopleProvider>
      </Grommet>
    </ApolloProvider>
  );
};

export default App;
