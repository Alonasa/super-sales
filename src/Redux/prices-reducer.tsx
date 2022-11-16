import {v1} from 'uuid';

let prices = [
  {
	id: v1(),
	header: 'Free',
	price: 'Free',
	features: ['Duration 10 days', 'Image gallery', 'Location',
	  'Tags, keywords',
	  'Phone number',]
  },
  {
	id: v1(),
	header: 'Basic',
	price: '5$',
	features: ['Duration 30 days', 'Image gallery', 'Location',
	  'Tags, keywords',
	  'Phone number', 'Top Listing', 'Home page 7 days']
  },
  {
	id: v1(),
	header: 'Premium',
	price: '10$',
	features: ['Duration 30 days', 'Image gallery', 'Location',
	  'Tags, keywords',
	  'Phone number', 'Top Listing', 'Home page 14 days', 'Multiple contacts', 'Messengers', 'Video']
  }
]

const pricesReducer = (state = prices, action: any) => {
  return state
}

export default pricesReducer