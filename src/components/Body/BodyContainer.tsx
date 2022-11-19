import React from 'react';
import {connect} from 'react-redux';
import {Body} from './Body';
import {AddsType} from '../Ads/Add';

let mapStateToProps = (store: AddsType)=> {
  return {
    items: store.items
  }
}



const BodyContainer = connect(mapStateToProps)(Body);

export default BodyContainer