import {v1} from 'uuid';
import {AddType} from '../components/Ads/Add';

let adds:Array<AddType> = [
  {
	id: v1(),
	title: '1',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: true
  },
  {
	id: v1(),
	title: '2',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: false
  },
  {
	id: v1(),
	title: '3',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: true
  },
  {
	id: v1(),
	title: '4',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: false
  },
  {
	id: v1(),
	title: '5',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: false
  },
  {
	id: v1(),
	title: '6',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: true
  },
]


const addsReducer = (state= adds, action:any) => {
  return state
}

export default addsReducer