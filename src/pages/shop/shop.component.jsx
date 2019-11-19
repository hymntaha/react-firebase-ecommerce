import React, { Component } from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";

const ShopComponent = ({ collections }) => (
  <div className="shop-page">
    <CollectionOverview />
  </div>
);

export default ShopComponent;
