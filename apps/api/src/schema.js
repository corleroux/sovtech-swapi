import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import fetch from 'node-fetch';

const BASE_URL = 'https://swapi.dev/api';

function getPeopleById(relativeUrl) {
  console.log(`${BASE_URL}/${relativeUrl}`);
  return fetch(`${BASE_URL}/${relativeUrl}`)
    .then((res) => res.json())
    .then((json) => json.people);
}

function getResource(url) {
  console.log(`${BASE_URL}/${url}`);
  return fetch(`${BASE_URL}/${url}`).then((res) => res.json());
}

const fetchPeople = () => {
  return fetchResourceByUrl(`${BASE_URL}/people`);
};

function fetchResourceByUrl(url) {
  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    })
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}

const PeopleType = new GraphQLObjectType({
  name: 'People',
  description: 'A people within the Star Wars universe',
  fields: () => ({
    name: {
      type: GraphQLString,
    },
    gender: {
      type: GraphQLString,
    },
    skin_color: {
      type: GraphQLString,
    },
    hair_color: {
      type: GraphQLString,
    },
    height: {
      type: GraphQLString,
    },
    eye_color: {
      type: GraphQLString,
    },
    mass: {
      type: GraphQLString,
    },
    homeworld: {
      type: GraphQLString,
    },
    birth_year: {
      type: GraphQLString,
    },
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: '...',
  fields: () => ({
    allPeople: {
      type: new GraphQLList(PeopleType),
      resolve: fetchPeople,
    },
    people: {
      type: PeopleType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => getResource(`people/${args.id}`),
    },
  }),
});

// const TypeDefs = gql`
//  name: String;
//  height: String;
//  mass: String;
//  hair_color: String;
//  skin_color: String;
//  eye_color: String;
//  birth_year: String;
//  gender: String;
//  homeworld: String;
// `;

const schema = new GraphQLSchema({
  query: QueryType,
});

export { schema };
