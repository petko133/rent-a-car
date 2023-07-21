import React from 'react';
import car from '../../assets/images/car.jpg';
import { FaCheckCircle, FaChevronRight } from 'react-icons/fa';
import classes from './Banner.module.css'

const Banner = () => {
	return (
		<div className={classes["hero-center-grid"]}>
        <article className={classes["hero-info"]}>
          <h3>Plan your trip now</h3>
          <h1>Save big with our car rental</h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles, big
            range of vehicles and more.
          </p>
          <a href='/reservations' className={classes.btn}>
            Rent Now{' '}
            <i className={classes["space-between"]}>
              <FaCheckCircle />
            </i>
          </a>
          <a href='/about' className={classes.btn}>
            Learn More{' '}
            <i className={classes["space-between"]}>
              <FaChevronRight />
            </i>
          </a>
        </article>
        <article className={classes["hero-images"]}>
          <img src={car} alt="car" className={classes["phone-img"]} />
        </article>
      </div>
	);
}

export default Banner;
