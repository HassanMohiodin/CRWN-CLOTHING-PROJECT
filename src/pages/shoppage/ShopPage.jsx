import React from 'react';
import { Route } from 'react-router-dom';

import './shopPage.styles.scss';

import CollectionOverview from './../../components/CollectionOverview/CollectionOverview';
import Collection from './../../components/Collection/Collection';

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collection`} component={Collection} />
  </div>
);

export default ShopPage;
