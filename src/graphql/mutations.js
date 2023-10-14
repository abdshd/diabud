/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSugar = /* GraphQL */ `
  mutation CreateSugar(
    $input: CreateSugarInput!
    $condition: ModelSugarConditionInput
  ) {
    createSugar(input: $input, condition: $condition) {
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
export const updateSugar = /* GraphQL */ `
  mutation UpdateSugar(
    $input: UpdateSugarInput!
    $condition: ModelSugarConditionInput
  ) {
    updateSugar(input: $input, condition: $condition) {
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
export const deleteSugar = /* GraphQL */ `
  mutation DeleteSugar(
    $input: DeleteSugarInput!
    $condition: ModelSugarConditionInput
  ) {
    deleteSugar(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
