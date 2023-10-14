/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSugar = /* GraphQL */ `
  query GetSugar($id: ID!) {
    getSugar(id: $id) {
      id
      timestamp
      sugar
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listSugars = /* GraphQL */ `
  query ListSugars(
    $filter: ModelSugarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSugars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        timestamp
        sugar
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      name
      unit
      quantity
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        unit
        quantity
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
