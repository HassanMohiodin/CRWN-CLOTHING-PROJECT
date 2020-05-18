import { createSelector } from 'reselect';

const getShopData = (state) => state.shopData;

export const getCollections = createSelector(
  [getShopData],
  (shopData) => shopData.collections
);

export const selectCollectionsForPreview = createSelector(
  [getCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const getSingleCollection = (collectionType) =>
  createSelector(
    [getCollections],
    (collections) => collections[collectionType]
  );
