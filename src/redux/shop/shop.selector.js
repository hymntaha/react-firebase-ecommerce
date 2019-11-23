import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectColletions],
  collections=> Object.keys(collections).map(key=> collections[key])
)

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollection],
    collections => collections[collectionUrlParam]
  )
