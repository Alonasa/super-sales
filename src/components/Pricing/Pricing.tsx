import React from 'react';
import Paper from '@mui/material/Paper';
import styles from './Pricing.module.css';
import {Button, Grid} from '@mui/material';
import {CheckCircleOutlineOutlined} from '@mui/icons-material';

export type PriceItemType = {
  id: string
  header: string
  price: string
  features: Array<string>
}

export type PricingType = {
  data: Array<PriceItemType>
}

export const Pricing = (props: PricingType) => {
  let {data} = props;
  return (
    <Grid container style={{justifyContent: 'space-evenly'}}>
      {data.map(d => {
        return (
          <div key={d.id} className={styles.pricing}>
            <h3 className={styles.pricing__header}>{d.header}</h3>
            <Paper className={styles.pricing__wrapper}>
              <div>
                <h3 style={{margin: '0 0 10px'}}>{d.price}</h3>
                <span>Per listing</span>
              </div>
              <div>
                <ul className={styles.pricing__features}>
                  {d.features.map(f => <li key={f} className={styles.pricing__feature}>
                    <CheckCircleOutlineOutlined color="inherit"
                                                style={{paddingRight: '15px'}}/>{f}
                  </li>)}
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