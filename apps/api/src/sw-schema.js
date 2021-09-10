import {
  GraphQLFloat,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  printSchema,
} from 'graphql';
import fetch from 'node-fetch';

const BASE_URL = process.env.base_url || 'https://swapi.dev/api';

function getPersonByUrl(url) {
  return fetch(url)
    .then((res) => res.json())
    .catch((err) => {
      console.log('Fetch Error :-S', err);
    });
}

function getPersonBySearch(search) {
  const ret = getPersonByUrl(`${BASE_URL}/people/?search=${search}`);
  return ret;
}

function getPeoplePage(page) {
  console.log(`${BASE_URL}/people/?page=${page}`);
  return getPersonByUrl(`${BASE_URL}/people/?page=${page}`);
}

const fetchPeople = () => {
  return getPersonByUrl(`${BASE_URL}/people`);
};

const PeopleFilter = new GraphQLInputObjectType({
  name: 'GeoPoint',
  fields: {
    lat: { type: new GraphQLNonNull(GraphQLFloat) },
    lon: { type: new GraphQLNonNull(GraphQLFloat) },
    alt: { type: GraphQLFloat, defaultValue: 0 },
  },
});

const PeopleType = new GraphQLObjectType({
  name: 'People',
  description: 'A people within the Star Wars universe',
  fields: () => ({
    count: { type: GraphQLString },
    next: { type: GraphQLString },
    previous: { type: GraphQLString },
    people: {
      type: new GraphQLList(PersonType),
      resolve: (people) => people.results,
    },
  }),
});

const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'An individual within the Star Wars universe',
  fields: () => ({
    name: { type: GraphQLString },
    gender: { type: GraphQLString },
    skin_color: { type: GraphQLString },
    hair_color: { type: GraphQLString },
    height: { type: GraphQLString },
    eye_color: { type: GraphQLString },
    mass: { type: GraphQLString },
    homeworld: { type: GraphQLString },
    birth_year: { type: GraphQLString },
  }),
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    fetchPeople: {
      type: PeopleType,
      resolve: fetchPeople,
    },
    fetchPage: {
      type: PeopleType,
      args: {
        page: { type: GraphQLString },
      },
      resolve: (root, args) => getPeoplePage(args.page),
    },
    fetchPerson: {
      type: PeopleType,
      args: {
        name: { type: GraphQLString },
      },
      resolve: (root, args) => getPersonBySearch(args.name),
    },
  }),
});
const schema = new GraphQLSchema({
  query: QueryType,
});

console.log(printSchema(schema));

export { schema };
