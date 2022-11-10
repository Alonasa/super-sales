import React from 'react';
import {DialogType} from '../Dialog/Dialog';

type UsersListType = {
  userData: Array<DialogType>
}

export const UsersList = (props: UsersListType) => {
  let {userData} = props
  return (
	<ul>
	  {userData.map(u => {
		  return (
			<li> {u.firstName} {u.secondName}</li>
		  )
		})}
	</ul>
  );
};