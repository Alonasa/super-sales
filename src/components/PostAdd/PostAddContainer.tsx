import React from 'react';
import {connect} from 'react-redux';
import {PricingType} from '../Pricing/Pricing';
import {PostAdd} from './PostAdd';

let mapStateToProps = (store: PricingType) => {
  return {
    data: store.data
  }
}


const PostAddContainer = connect(mapStateToProps)(PostAdd);

export default PostAddContainer