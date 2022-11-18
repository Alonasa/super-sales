import {connect} from 'react-redux';
import {Body} from './Body';
import {AddsType} from '../Ads/Add';

let mapStateToProps = (state: any)=> {
  return {
    items: state.items
  }
}



export const BodyContainer = connect(mapStateToProps)(Body)