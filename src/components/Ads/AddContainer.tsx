import React from 'react';
import {Add, AddsType} from './Add';
import {connect} from 'react-redux';

let mapStateToProps = (store: AddsType) => {
  return {
	items: store.items
  }
}

let mapDispatchToProps = (dispatch: (dispatch: { type: string, isFavorite: boolean, id: string }) => void) => {
  return {
	dispatch: (isFavorite: boolean, id: string) => {
	  dispatch({type: 'MAKE-FAVORITE', isFavorite: isFavorite, id: id})
    }
  }
}

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add);

export default AddContainer;