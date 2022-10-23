import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './Pricing.module.css';
import {Box, Button} from '@mui/material';

export const Pricing = () => {
  return (
	<div className={styles.pricing}>
	  <h3 className={styles.pricing__header}>Free</h3>
	  <Paper className={styles.pricing__wrapper}>
		<div>
		  <span>Free</span><br/>
		  <span>Per Listing</span>
		</div>
		<div>
		  <ul className={styles.pricing__features}>
			<li>Duration 10 days</li>
			<li>Image gallery</li>
			<li>Location</li>
			<li>Tags, keywords</li>
			<li>Phone number</li>
		  </ul>
		  <form className={styles.pricing__submit} method="post">
			<Button variant={'outlined'}>Choose Plan</Button>
		  </form>
		</div>
	  </Paper>
	</div>
  );
};