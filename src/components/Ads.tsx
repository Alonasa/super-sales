import React from 'react';
import {Container} from '@mui/material';
import {Add} from './Add';

const items = [
  {id: 0, title: '1'},
  {id: 1, title: '1'},
  {id: 2, title: '1'},
  {id: 3, title: '1'},
  {id: 4, title: '1'},
  {id: 5, title: '1'},
]

export const Ads = () => {
  return (
	<Container maxWidth="md">
	  <Add items={items}/>
	</Container>
  );
};