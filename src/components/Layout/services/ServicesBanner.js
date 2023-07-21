import React from 'react';
import classes from './Services.module.css';

const ServicesBanner = () => {
  return (
    <div className={`hero ${classes['services-bg']}`}>
        <section className='center-align'>
          <h1 className={classes['services-header']}>Services</h1>
          <hr className={classes['hr-style']} />
        </section>
    </div>
  );
};

export default ServicesBanner;
