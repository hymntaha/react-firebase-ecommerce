import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';
import {selectCollection} from "../../redux/shop/shop.selector";

const CollectionPage = ({collection}) => {
  return (
    <div className='collection-page'>
      <h2>Category Page</h2>
    </div>
  );
};

const mapStateToProps = (state,ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})


export default connect(mapStateToProps)(CollectionPage);
