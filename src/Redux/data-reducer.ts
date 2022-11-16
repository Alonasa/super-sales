import {ID1, ID2, ID3} from './state';
import {DataType} from '../components/MessagesPage/Dialogs/Dialogs';

const dataId:Array<DataType> = [
  {id: ID1},
  {id: ID2},
  {id: ID3}
]

const dataReducer = (state = dataId) => {
  return state
}

export default dataReducer