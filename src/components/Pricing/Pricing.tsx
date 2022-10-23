import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './Pricing.module.css';
import {Button, Grid} from '@mui/material';

type PriceItemType = {
  header: string
  price: string
  features: Array<string>
}

type PricingType = {
  data: Array<PriceItemType>
}

export const Pricing = (props: PricingType) => {
  return (
    <Grid container style={{justifyContent: 'space-evenly'}}>
	  {props.data.map(d => {
		return (
		  <div className={styles.pricing}>
			<h3 className={styles.pricing__header}>{d.header}</h3>
			<Paper className={styles.pricing__wrapper}>
			  <div>
				<span>{d.header}</span><br/>
				<span>{d.price}</span>
			  </div>
			  <div>
				<ul className={styles.pricing__features}>
				  {d.features.map(f => <li>{f}</li>)}
				</ul>
				<form className={styles.pricing__submit} method="post">
				  <Button variant={'outlined'}>Choose Plan</Button>
				</form>
			  </div>
			</Paper>
		  </div>
		)
	  })}
	</Grid>
  )
};