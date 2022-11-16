import {v1} from 'uuid';
import {ID1, ID2, ID3} from './state';

let dialogs = {
  [ID1]: [{
	id: v1(),
	firstName: 'Bob',
	secondName: 'Michael',
	isOnline: false,
  }],
  [ID2]: [{
	id: v1(),
	firstName: 'Anna',
	secondName: 'Michael',
	isOnline: true,
  }],
  [ID3]: [{
	id: v1(),
	firstName: 'Kate',
	secondName: 'Michael',
	isOnline: false,
  }],
}


const dialogsReducer = (state = dialogs, action: any) => {
  return state
}

export default dialogsReducer