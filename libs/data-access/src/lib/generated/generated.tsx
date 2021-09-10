import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** A people within the Star Wars universe */
export type People = {
  __typename?: 'People';
  count?: Maybe<Scalars['String']>;
  next?: Maybe<Scalars['String']>;
  people?: Maybe<Array<Maybe<Person>>>;
  previous?: Maybe<Scalars['String']>;
};

/** An individual within the Star Wars universe */
export type Person = {
  __typename?: 'Person';
  birth_year?: Maybe<Scalars['String']>;
  eye_color?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  hair_color?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Scalars['String']>;
  mass?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  skin_color?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  fetchPage?: Maybe<People>;
  fetchPeople?: Maybe<People>;
  fetchPerson?: Maybe<People>;
};


export type QueryFetchPageArgs = {
  page?: Maybe<Scalars['String']>;
};


export type QueryFetchPersonArgs = {
  name?: Maybe<Scalars['String']>;
};

export type FetchPeopleQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchPeopleQuery = { __typename?: 'Query', fetchPeople?: Maybe<{ __typename?: 'People', count?: Maybe<string>, next?: Maybe<string>, previous?: Maybe<string>, people?: Maybe<Array<Maybe<{ __typename?: 'Person', name?: Maybe<string>, gender?: Maybe<string>, skin_color?: Maybe<string>, hair_color?: Maybe<string>, height?: Maybe<string>, eye_color?: Maybe<string>, mass?: Maybe<string>, birth_year?: Maybe<string> }>>> }> };

export type FetchPageQueryVariables = Exact<{
  fetchPagePage?: Maybe<Scalars['String']>;
}>;


export type FetchPageQuery = { __typename?: 'Query', fetchPage?: Maybe<{ __typename?: 'People', count?: Maybe<string>, next?: Maybe<string>, previous?: Maybe<string>, people?: Maybe<Array<Maybe<{ __typename?: 'Person', name?: Maybe<string>, gender?: Maybe<string>, skin_color?: Maybe<string>, hair_color?: Maybe<string>, height?: Maybe<string>, eye_color?: Maybe<string>, mass?: Maybe<string>, birth_year?: Maybe<string> }>>> }> };

export type FetchPersonQueryVariables = Exact<{
  name?: Maybe<Scalars['String']>;
}>;


export type FetchPersonQuery = { __typename?: 'Query', fetchPerson?: Maybe<{ __typename?: 'People', people?: Maybe<Array<Maybe<{ __typename?: 'Person', name?: Maybe<string>, gender?: Maybe<string>, skin_color?: Maybe<string>, hair_color?: Maybe<string>, height?: Maybe<string>, eye_color?: Maybe<string>, mass?: Maybe<string>, birth_year?: Maybe<string> }>>> }> };


export const FetchPeopleDocument = gql`
    query fetchPeople {
  fetchPeople {
    count
    next
    previous
    people {
      name
      gender
      skin_color
      hair_color
      height
      eye_color
      mass
      birth_year
    }
  }
}
    `;

/**
 * __useFetchPeopleQuery__
 *
 * To run a query within a React component, call `useFetchPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPeopleQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchPeopleQuery(baseOptions?: Apollo.QueryHookOptions<FetchPeopleQuery, FetchPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPeopleQuery, FetchPeopleQueryVariables>(FetchPeopleDocument, options);
      }
export function useFetchPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPeopleQuery, FetchPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPeopleQuery, FetchPeopleQueryVariables>(FetchPeopleDocument, options);
        }
export type FetchPeopleQueryHookResult = ReturnType<typeof useFetchPeopleQuery>;
export type FetchPeopleLazyQueryHookResult = ReturnType<typeof useFetchPeopleLazyQuery>;
export type FetchPeopleQueryResult = Apollo.QueryResult<FetchPeopleQuery, FetchPeopleQueryVariables>;
export const FetchPageDocument = gql`
    query fetchPage($fetchPagePage: String) {
  fetchPage(page: $fetchPagePage) {
    count
    next
    previous
    people {
      name
      gender
      skin_color
      hair_color
      height
      eye_color
      mass
      birth_year
    }
  }
}
    `;

/**
 * __useFetchPageQuery__
 *
 * To run a query within a React component, call `useFetchPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPageQuery({
 *   variables: {
 *      fetchPagePage: // value for 'fetchPagePage'
 *   },
 * });
 */
export function useFetchPageQuery(baseOptions?: Apollo.QueryHookOptions<FetchPageQuery, FetchPageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPageQuery, FetchPageQueryVariables>(FetchPageDocument, options);
      }
export function useFetchPageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPageQuery, FetchPageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPageQuery, FetchPageQueryVariables>(FetchPageDocument, options);
        }
export type FetchPageQueryHookResult = ReturnType<typeof useFetchPageQuery>;
export type FetchPageLazyQueryHookResult = ReturnType<typeof useFetchPageLazyQuery>;
export type FetchPageQueryResult = Apollo.QueryResult<FetchPageQuery, FetchPageQueryVariables>;
export const FetchPersonDocument = gql`
    query fetchPerson($name: String) {
  fetchPerson(name: $name) {
    people {
      name
      gender
      skin_color
      hair_color
      height
      eye_color
      mass
      birth_year
    }
  }
}
    `;

/**
 * __useFetchPersonQuery__
 *
 * To run a query within a React component, call `useFetchPersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchPersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchPersonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useFetchPersonQuery(baseOptions?: Apollo.QueryHookOptions<FetchPersonQuery, FetchPersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FetchPersonQuery, FetchPersonQueryVariables>(FetchPersonDocument, options);
      }
export function useFetchPersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FetchPersonQuery, FetchPersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FetchPersonQuery, FetchPersonQueryVariables>(FetchPersonDocument, options);
        }
export type FetchPersonQueryHookResult = ReturnType<typeof useFetchPersonQuery>;
export type FetchPersonLazyQueryHookResult = ReturnType<typeof useFetchPersonLazyQuery>;
export type FetchPersonQueryResult = Apollo.QueryResult<FetchPersonQuery, FetchPersonQueryVariables>;