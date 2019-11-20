import React from "react";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import {Route} from 'react-router-dom';
import CategoryPage from "../category/category.component";

const ShopComponent = ({match}) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
  </div>
);

export default ShopComponent;
