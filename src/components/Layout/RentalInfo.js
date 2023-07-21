import React from 'react';
import classes from './RentalInfo.module.css';
import { FaMoneyBillWave } from 'react-icons/fa';

const RentalInfo = () => {
  return (
    <div className="hero-center">
      <div className="center-align">
        <h3>Plan your trip</h3>
        <h2>Quick and easy car rental</h2>
      </div>
      <div className="hero-center-grid-tree">
        <article className={classes['hero-info']}>
          <div>
            <h3 className={classes['p-padding']}>Select Car</h3>
            <p className="p-padding">
              We offer a big range of vehocles for all your driving needs. We
              have the perfect car to meet your needs
            </p>
          </div>
        </article>
        <article className={classes['hero-info']}>
          <h3 className={classes['p-padding']}>Contact Operator</h3>
          <p className="p-padding">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </article>
        <article className={classes['hero-info']}>
          <h3 className={classes['p-padding']}>Let's Drive</h3>
          <p className="p-padding">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </article>
      </div>
    </div>
  );
};

export default RentalInfo;
