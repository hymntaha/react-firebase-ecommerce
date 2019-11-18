import React, { Component } from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const ShopComponent = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default ShopComponent;
