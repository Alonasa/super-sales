import React from 'react';
import {Add, AddType} from './Add';
import {connect} from 'react-redux';
import {AppStateType} from '../../Redux/redux-store';
import {AddToCartAC, MakeFavoriteAC} from '../../Redux/adds-reducer';
import {Dispatch} from 'redux';

type MapStatePropsType = {
  items: AddType[]
}

type MapDispatchPropsType = {
  addToFavorites: (isFavorite: boolean, id: string) => void
  addToCart: (isAddedToCart: boolean, id: string) => void
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
	items: state.items
  }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
  return {
	addToFavorites: (isFavorite: boolean, id: string) => {
	  dispatch(MakeFavoriteAC(isFavorite, id))
	},
	addToCart: (isAddedToCart: boolean, id: string) => {
	  dispatch(AddToCartAC(isAddedToCart, id))
	}
  }
}

const AddContainer = connect(mapStateToProps, mapDispatchToProps)(Add);

export default AddContainer;