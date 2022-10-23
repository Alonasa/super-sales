import React from 'react';
import {Container} from '@mui/material';
import {Pricing} from '../Pricing/Pricing';

export const PostAdd = () => {
  return (
	<Container>
	  <h3>Choose a posting plan</h3>
	  <Pricing/>
	</Container>
  );
};