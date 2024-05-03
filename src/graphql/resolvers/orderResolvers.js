export const order = (_, { id }) => {
  return {
    id,
    userOwnerID: '1',
    DateCreation: 'date',
    status: 'status',
    anejosLightID: '1',
    anejosHeavyID: '1'
  }

}

export const allOrders = (_, args) => {
  return [];
}

export const addOrder = (_, args) => {
  return [];
}
