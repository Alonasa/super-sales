import React from 'react';
import {connect} from 'react-redux';
import {Favorites} from './Favorites';
import {AppStateType} from '../../Redux/redux-store';

let mapStateToProps = (state: AppStateType) => {
  return {
	items: state.items
  }
}


const FavoritesContainer = connect(mapStateToProps)(Favorites);

export default FavoritesContainer