import React from 'react';
import {Container} from '@mui/material';
import {Pricing, PricingType} from '../Pricing/Pricing';

export const PostAdd = (props: PricingType) => {
  const {data} = props
  return (
	<Container>
	  <h3>Choose a posting plan</h3>
	  <Pricing data={data}/>
	</Container>
  );
};