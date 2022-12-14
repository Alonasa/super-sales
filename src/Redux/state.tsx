import {v1} from 'uuid';
import {AppType} from '../App';
import messagesReducer from './add-message-reducer';

export const ID1 = v1();
export const ID2 = v1();
export const ID3 = v1();


// export type StoreType = {
//   _state: AppType
//   _callSubscriber: (state: AppType) => void
//   getState: () => AppType
//   subscribe: (observer: (state: AppType) => void) => void
//   dispatch: (action: DispatchACType) => void
// }
//
// let store: StoreType = {
//   _state: {
// 	adds: [
// 	  {
// 		id: v1(),
// 		title: '1',
// 		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
// 		price: 20,
// 		isFavorite: true
// 	  },
// 	  {
// 		id: v1(),
// 		title: '2',
// 		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
// 		price: 20,
// 		isFavorite: false
// 	  },
// 	  {
// 		id: v1(),
// 		title: '3',
// 		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
// 		price: 20,
// 		isFavorite: true
// 	  },
// 	  {
// 		id: v1(),
// 		title: '4',
// 		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
// 		price: 20,
// 		isFavorite: false
// 	  },
// 	  {
// 		id: v1(),
// 		title: '5',
// 		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
// 		price: 20,
// 		isFavorite: false
// 	  },
// 	  {
// 		id: v1(),
// 		title: '6',
// 		description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
// 		price: 20,
// 		isFavorite: true
// 	  },
// 	],
//
// 	messages: {
// 	  [ID1]: [
// 		{
// 		  id: v1(),
// 		  message: 'Hi'
// 		},
// 		{
// 		  id: v1(),
// 		  message: 'What are you doing?',
// 		},
// 		{id: v1(), message: 'Will you join lesson today?'},
// 	  ],
// 	  [ID2]: [
// 		{
// 		  id: v1(),
// 		  message: 'Hi'
// 		},
// 		{
// 		  id: v1(),
// 		  message: 'What are you doing?',
// 		},
// 		{id: v1(), message: 'Will you join lesson today?'},
// 	  ],
// 	  [ID3]: [
// 		{
// 		  id: v1(),
// 		  message: 'Hi'
// 		},
// 		{
// 		  id: v1(),
// 		  message: 'What are you doing?',
// 		},
// 		{id: v1(), message: 'Will you join lesson today? I need to check'},
// 	  ],
// 	},
//
// 	dataId: [
// 	  {id: ID1},
// 	  {id: ID2},
// 	  {id: ID3}
// 	],
//
// 	dialogs: {
// 	  [ID1]: [{
// 		id: v1(),
// 		firstName: 'Bob',
// 		secondName: 'Michael',
// 		isOnline: false,
// 	  }],
// 	  [ID2]: [{
// 		id: v1(),
// 		firstName: 'Anna',
// 		secondName: 'Michael',
// 		isOnline: true,
// 	  }],
// 	  [ID3]: [{
// 		id: v1(),
// 		firstName: 'Kate',
// 		secondName: 'Michael',
// 		isOnline: false,
// 	  }],
// 	},
//
// 	prices: [
// 	  {
// 		id: v1(),
// 		header: 'Free',
// 		price: 'Free',
// 		features: ['Duration 10 days', 'Image gallery', 'Location',
// 		  'Tags, keywords',
// 		  'Phone number',]
// 	  },
// 	  {
// 		id: v1(),
// 		header: 'Basic',
// 		price: '5$',
// 		features: ['Duration 30 days', 'Image gallery', 'Location',
// 		  'Tags, keywords',
// 		  'Phone number', 'Top Listing', 'Home page 7 days']
// 	  },
// 	  {
// 		id: v1(),
// 		header: 'Premium',
// 		price: '10$',
// 		features: ['Duration 30 days', 'Image gallery', 'Location',
// 		  'Tags, keywords',
// 		  'Phone number', 'Top Listing', 'Home page 14 days', 'Multiple contacts', 'Messengers', 'Video']
// 	  }
// 	],
//   },
//   _callSubscriber(state: AppType) {
//     console.log(state)
//   },
//
//   getState() {
// 	return this._state
//   },
//   subscribe(observer: (state: AppType) => void) {
// 	this._callSubscriber = observer
//   },
//
//   dispatch(action) {
// 	messagesReducer(this._state.messages, action);
//
//
// 	this._callSubscriber(this._state)
//   }
// }
//
//
//
// export default store