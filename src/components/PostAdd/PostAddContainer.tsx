import React from 'react';
import {connect} from 'react-redux';
import {PricingType} from '../Pricing/Pricing';
import {PostAdd} from './PostAdd';

let mapStateToProps = (store: PricingType) => {
  return {
    data: store.data
  }
}


const BodyContainer = connect(mapStateToProps)(PostAdd);

export default BodyContainer