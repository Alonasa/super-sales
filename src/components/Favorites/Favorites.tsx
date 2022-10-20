import React from 'react';
import {Add, AddsType} from '../Ads/Add';

export const Favorites = (props: AddsType) => {
  return (
	<Add  items={props.items.filter(i => i.isFavorite)}/>
  );
};