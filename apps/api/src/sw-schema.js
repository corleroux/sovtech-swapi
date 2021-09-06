import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';
import fetch from 'node-fetch';

const BASE_URL = process.env.base_url || 'http://localhost:8000/api';

const PeopleType = new GraphQLObjectType({
  name: 'People',
  description: 'A people within the Star Wars universe',
});

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'An individual within the Star Wars universe',
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
  fields: () => ({
    people: {
      type: PeopleType,
      resolve: fetchPeople,
    },
    person: {
      type: PersonType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => getResource(`people/${args.id}`),
    },
  }),
});

const schema = new GraphQLSchema({
  query: QueryType,
});

export { schema };
