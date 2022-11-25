import {v1} from 'uuid';
import {AddType} from '../components/Ads/Add';

let adds: AddType[] = [
  {
	id: v1(),
	title: '1',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: true,
	isAddedToCart: true,
  },
  {
	id: v1(),
	title: '2',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: false,
	isAddedToCart: true,
  },
  {
	id: v1(),
	title: '3',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: true,
	isAddedToCart: false,
  },
  {
	id: v1(),
	title: '4',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: false,
	isAddedToCart: false,
  },
  {
	id: v1(),
	title: '5',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: false,
	isAddedToCart: false,
  },
  {
	id: v1(),
	title: '6',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: true,
	isAddedToCart: true,
  },
]

export type AddToCartAT = ReturnType<typeof AddToCartAC>
export type MakeFavoriteAT = ReturnType<typeof MakeFavoriteAC>

export const AddToCartAC = (isAddedToCart: boolean, id: string) => {
  return {
	type: 'ADD-TO-CART',
	id: id,
	isAddedToCart: isAddedToCart
  } as const
}

export const MakeFavoriteAC = (isFavorite: boolean, id: string) => {
  return {
	type: 'MAKE-FAVORITE',
	isFavorite: isFavorite,
	id: id
  } as const
}

const addsReducer = (state = adds, action: MakeFavoriteAT | AddToCartAT): AddType[] => {
  switch (action.type) {
	case 'MAKE-FAVORITE': {
	  return [...state.map(i => i.id === action.id ? (
		{
		  ...i, isFavorite: !action.isFavorite
		}) : i)]
	}
	case 'ADD-TO-CART': {
	  return [...state.map(i => i.id === action.id ? (
		{
		  ...i, isAddedToCart: !action.isAddedToCart
		}) : i)]
	}
  }
  
  return state
}


export default addsReducer