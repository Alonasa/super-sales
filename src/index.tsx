import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {v1} from 'uuid';
import {MessageType} from './components/MessagesPage/Messages/Messages';

const ID1 = v1();
const ID2 = v1();
const ID3 = v1();

const messages: MessageType[][] = [
  [
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
  [
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
  [
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
]

const state = {
  items: [{
	id: 0,
	title: '1',
	description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	price: 20,
	isFavorite: true
  },
	{
	  id: 1,
	  title: '2',
	  description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	  price: 20,
	  isFavorite: false
	},
	{
	  id: 2,
	  title: '3',
	  description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	  price: 20,
	  isFavorite: true
	},
	{
	  id: 3,
	  title: '4',
	  description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	  price: 20,
	  isFavorite: false
	},
	{
	  id: 4,
	  title: '5',
	  description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	  price: 20,
	  isFavorite: false
	},
	{
	  id: 5,
	  title: '6',
	  description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
	  price: 20,
	  isFavorite: true
	},
  ],
  
  data: [
	{id: ID1},
	{id: ID2},
	{id: ID3}
  ],
  
  dialogsData: {
	[ID1]: [{
	  firstName: 'Bob',
	  secondName: 'Michael',
	  isOnline: false,
	  messages: messages[0]
	}],
	[ID2]: [{
	  firstName: 'Anna',
	  secondName: 'Michael',
	  isOnline: true,
	  messages: messages[1]
	}],
	[ID3]: [{
	  firstName: 'Kate',
	  secondName: 'Michael',
	  isOnline: false,
	  messages: messages[2]
	}],
  }
}


const prices = [
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

ReactDOM.render(
  <BrowserRouter>
	<App adsData={state.items} data={state.data} dialogsData={state.dialogsData}
		 pricesData={prices}/>
  </BrowserRouter>,
  document.getElementById('root')
);