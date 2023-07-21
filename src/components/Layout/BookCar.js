import React from 'react';
import { FaCar } from 'react-icons/fa';
import Dropdown from '../UI/Dropdown';
import carsData from '../../assets/data/data';
import locations from '../../assets/data/Locations';
import classes from './BookCar.module.css';

const BookCar = () => {
  return (
    <div className="hero-center">
      <h3>Book a car</h3>
      <div style={{ paddingTop: 10 }} className="hero-center-grid-tree">
        <article className="hero-info">
          <div className={classes['book-car-input']}>
            <h4 className={classes['align-bottom']}>
              <i className={classes['space-between']}>
                <FaCar />
              </i>{' '}
              Select Your Car Type
            </h4>
            <Dropdown
              placeHolder={'Select a car type'}
              options={carsData.map((car) => {
                return { value: car.name.toLowerCase(), label: car.name };
              })}
            />
          </div>
          <div className={classes['book-car-input']}>
            <h4 className={classes['align-bottom']}>
              <i className={classes['space-between']}>
                <FaCar />
              </i>{' '}
              Pick-up date
            </h4>
            <input type="date" className="date-container date-input" />
          </div>
        </article>
        <article className="hero-info">
          <div className={classes['book-car-input']}>
            <h4 className={classes['align-bottom']}>
              <i className={classes['space-between']}>
                <FaCar />
              </i>{' '}
              Select Your Location
            </h4>
            <Dropdown
              placeHolder={'Select Your Location'}
              options={locations}
            />
          </div>
          <div className={classes['book-car-input']}>
            <h4 className={classes['align-bottom']}>
              <i className={classes['space-between']}>
                <FaCar />
              </i>{' '}
              Drop-of date
            </h4>
            <input type="date" className="date-container date-input" />
          </div>
        </article>
        <article className="hero-info">
          <div className={classes['book-car-input']}>
            <h4 className={classes['align-bottom']}>
              <i className={classes['space-between']}>
                <FaCar />
              </i>{' '}
              Drop-of location
            </h4>
            <Dropdown placeHolder={'Drop-of location'} options={locations} />
          </div>
          <div className={classes['book-car-input']}>
            <a href="/vehicles" class="btn-search">
              search
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BookCar;
