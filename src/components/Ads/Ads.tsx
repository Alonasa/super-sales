import React from 'react';
import {Container} from '@mui/material';
import {Add, AddsType} from './Add';



export const Ads = (props: AddsType) => {
  return (
	<Container maxWidth="md">
	  <Add items={props.items}/>
	</Container>
  );
};