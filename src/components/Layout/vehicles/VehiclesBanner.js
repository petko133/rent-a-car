import React from 'react';
import classes from './Vehicles.module.css'

const VehiclesBanner = () => {
	return (
		<div className={`hero ${classes['services-bg']}`}>
        <section className='center-align'>
          <h1 className={classes['services-header']}>Vehicles</h1>
          <hr className={classes['hr-style']} />
        </section>
    </div>
	);
}

export default VehiclesBanner;
