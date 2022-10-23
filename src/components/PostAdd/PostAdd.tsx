import React from 'react';
import {Container} from '@mui/material';
import {Pricing} from '../Pricing/Pricing';

const prices = [
  {header: 'Free',
	price: 'Free',
	features: ['Duration 10 days', 'Image gallery', 'Location',
	  'Tags, keywords',
	  'Phone number',]
  },
  {header: 'Basic',
	price: '5$',
	features: ['Duration 30 days', 'Image gallery', 'Location',
	  'Tags, keywords',
	  'Phone number', 'Top Listing', 'Home page 7 days']
  },
  {header: 'Premium',
	price: '10$',
	features: ['Duration 30 days', 'Image gallery', 'Location',
	  'Tags, keywords',
	  'Phone number', 'Top Listing', 'Home page 14 days', 'Multiple contacts', 'Messengers', 'Video']
  }
]

export const PostAdd = () => {
  return (
	<Container>
	  <h3>Choose a posting plan</h3>
	  <Pricing data={prices}/>
	</Container>
  );
};