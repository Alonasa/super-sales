import React from 'react';
import {Container} from '@mui/material';
import {Add} from './Add';

const items = [
  {id: 0, title: '1', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', price: 20, isFavorite: true},
  {id: 1, title: '2', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', price: 20, isFavorite: false},
  {id: 2, title: '3', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', price: 20, isFavorite: true},
  {id: 3, title: '4', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', price: 20, isFavorite: false},
  {id: 4, title: '5', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', price: 20, isFavorite: false},
  {id: 5, title: '6', description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica', price: 20, isFavorite: true},
]

export const Ads = () => {
  return (
	<Container maxWidth="md">
	  <Add items={items}/>
	</Container>
  );
};