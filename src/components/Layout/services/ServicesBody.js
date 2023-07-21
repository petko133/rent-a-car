import React from 'react';
import classes from './Services.module.css';
import promCar from '../../../assets/images/prom.jpg';
import weddingCar from '../../../assets/images/wedding.jpg';
import vanCar from '../../../assets/images/van.jpg';

const ServicesBody = () => {
  return (
    <>
      <div className="align-center">
        <h1 className={`align-center ${classes['h1-3rem']}`}>
          Our Services include but are not limited to:
        </h1>
      </div>
      <div className="hero">
        <div className="hero-center-grid-tree">
          <div class={classes['flex-item']}>
            <div className={classes['items-aligning']}>
              <h3 className={classes['h3-3rem']}>Prom Rental</h3>
              <div className={classes['float-div-img']}>
                <img
                  src={promCar}
                  alt="promCar"
                  className={classes['prom-car']}
                />
              </div>
              <p>
                Luxury car with a driver for special occasions from Rent a Car.
                Choose from a variety of exotic cars that will make your
                entrance unforgettable.
              </p>
              <a href="/vehicles" className="btn">
                Book Now
              </a>
            </div>
          </div>
          <div class={classes['flex-item']}>
            <div className={classes['items-aligning']}>
              <h3 className={classes['h3-3rem']}>Weddings Rental</h3>
              <div className={classes['float-div-img']}>
                <img
                  src={weddingCar}
                  alt="weddingCar"
                  className={classes['prom-car']}
                />
              </div>
              <p>
                Your wedding car will be ready and outside the church. A
                romantic classic or vintage car will make your wedding drive in
                unforgettable.
              </p>
              <a href="/vehicles" className="btn">
                Book Now
              </a>
            </div>
          </div>
          <div class={classes['flex-item']}>
            <div className={classes['items-aligning']}>
              <h3 className={classes['h3-3rem']}>Cargo van rentals</h3>
              <div className={classes['float-div-img']}>
                <img
                  src={vanCar}
                  alt="vanCar"
                  className={classes['prom-car']}
                />
              </div>
              <p>
                Rent A Car offers diversity of cargo vans for rent in Sofia,
                from our office or delivery to exact address in every major
                city.
              </p>
              <a href="/vehicles" className="btn">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesBody;
