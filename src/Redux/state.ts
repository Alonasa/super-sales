import {v1} from 'uuid';
import {MessagesListType} from '../components/MessagesPage/Message/Messages';

const ID1 = v1();
const ID2 = v1();
const ID3 = v1();

const messages:MessagesListType = {
  [ID1]: [
	{
	  id: v1(),
	  message: 'Hi'
	},
	{
	  id: v1(),
	  message: 'What are you doing?',
	},
	{id: v1(), message: 'Will you join lesson today?'},
  ],
  [ID2]: [
	{
	  id: v1(),
	  message: 'Hi'
	},
	{
	  id: v1(),
	  message: 'What are you doing?',
	},
	{id: v1(), message: 'Will you join lesson today?'},
  ],
  [ID3]: [
	{
	  id: v1(),
	  message: 'Hi'
	},
	{
	  id: v1(),
	  message: 'What are you doing?',
	},
	{id: v1(), message: 'Will you join lesson today? I need to check'},
  ],
}

export const state = {
  adds: [
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
  ],
  
  dataId: [
	{id: ID1},
	{id: ID2},
	{id: ID3}
  ],
  
  dialogs: {
	[ID1]: [{
	  firstName: 'Bob',
	  secondName: 'Michael',
	  isOnline: false,
	  messages: messages[ID1]
	}],
	[ID2]: [{
	  firstName: 'Anna',
	  secondName: 'Michael',
	  isOnline: true,
	  messages: messages[ID2]
	}],
	[ID3]: [{
	  firstName: 'Kate',
	  secondName: 'Michael',
	  isOnline: false,
	  messages: messages[ID3]
	}],
  },
  
  prices: [
	{
	  header: 'Free',
	  price: 'Free',
	  features: ['Duration 10 days', 'Image gallery', 'Location',
		'Tags, keywords',
		'Phone number',]
	},
	{
	  header: 'Basic',
	  price: '5$',
	  features: ['Duration 30 days', 'Image gallery', 'Location',
		'Tags, keywords',
		'Phone number', 'Top Listing', 'Home page 7 days']
	},
	{
	  header: 'Premium',
	  price: '10$',
	  features: ['Duration 30 days', 'Image gallery', 'Location',
		'Tags, keywords',
		'Phone number', 'Top Listing', 'Home page 14 days', 'Multiple contacts', 'Messengers', 'Video']
	}
  ]
}