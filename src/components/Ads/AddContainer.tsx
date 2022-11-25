import React from 'react';
import {Add, AddsType} from './Add';
import {connect} from 'react-redux';

let mapStateToProps = (state: AddsType) => {
  return {
	items: state.items
  }
}

let mapDispatchToProps = (dispatch:(addToFavorites: { type: string, isFavorite: boolean, id: string }) => void) =>
{
  return {
	addToFavorites: (isFavorite: boolean, id: string) => {
	  dispatch({type: 'MAKE-FAVORITE', isFavorite: isFavorite, id: id})
	},
  }
}

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add);

export default AddContainer;