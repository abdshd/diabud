/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateSugar = /* GraphQL */ `
  subscription OnCreateSugar(
    $filter: ModelSubscriptionSugarFilterInput
    $owner: String
  ) {
    onCreateSugar(filter: $filter, owner: $owner) {
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
export const onUpdateSugar = /* GraphQL */ `
  subscription OnUpdateSugar(
    $filter: ModelSubscriptionSugarFilterInput
    $owner: String
  ) {
    onUpdateSugar(filter: $filter, owner: $owner) {
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
export const onDeleteSugar = /* GraphQL */ `
  subscription OnDeleteSugar(
    $filter: ModelSubscriptionSugarFilterInput
    $owner: String
  ) {
    onDeleteSugar(filter: $filter, owner: $owner) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onCreateItem(filter: $filter, owner: $owner) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onUpdateItem(filter: $filter, owner: $owner) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem(
    $filter: ModelSubscriptionItemFilterInput
    $owner: String
  ) {
    onDeleteItem(filter: $filter, owner: $owner) {
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
