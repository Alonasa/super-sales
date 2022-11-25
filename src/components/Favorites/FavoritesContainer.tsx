import React from 'react';
import {connect} from 'react-redux';
import {AddsType} from '../Ads/Add';
import {Favorites} from './Favorites';

let mapStateToProps = (store: AddsType) => {
  return {
	items: store.items
  }
}


const FavoritesContainer = connect(mapStateToProps)(Favorites);

export default FavoritesContainer