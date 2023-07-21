import React from 'react';
import { FaPhone, FaMailBulk } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className={classes['footer']}>
          <div className="p-padding">
            <h3>Car Rental</h3>
            <p>
              We offer a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <h4>
              {' '}
              <FaPhone /> (123)-456-789
            </h4>
            <h4>
              {' '}
              <FaMailBulk /> carrental@email.com
            </h4>
          </div>
          <div className="p-padding">
            <h3>COMPANY</h3>
            <ul>
              <li className={classes['li-padding']}>
                <a href="#">New York</a>
              </li>
              <li className={classes['li-padding']}>
                <a href="#">Careers</a>
              </li>
              <li className={classes['li-padding']}>
                <a href="#">Mobile</a>
              </li>
              <li className={classes['li-padding']}>
                <a href="#">Blog</a>
              </li>
              <li className={classes['li-padding']}>
                <a href="#">How we work</a>
              </li>
            </ul>
          </div>
          <div className="p-padding">
            <h3>Working Hours</h3>
            <ul>
              <li className={classes['li-padding']}>
                Mon - Fri: 9:00AM - 9:00PM
              </li>
              <li className={classes['li-padding']}>Sat: 10:00AM - 6:00PM</li>
              <li className={classes['li-padding']}>Sun: 12:00AM - 6:00PM</li>
            </ul>
          </div>
          <div className="p-padding">
            <h3>Subscribe</h3>
            <p>Enter your Email below to receive the latest offers.</p>
            <input
              type="text"
              className="date-container date-input"
              placeholder="Enter your Email"
            />
            <button type="submit" className={classes['btn-submit']}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
