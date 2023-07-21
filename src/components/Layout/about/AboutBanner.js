import React from 'react';
import classes from './About.module.css';

const AboutBanner = () => {
  return (
    <div className={`hero ${classes['about-bg']}`}>
      <div className="center-align">
        <div className="hero-info">
          <section>
            <h1 className={classes['about-us-header']}>About Us<hr className={classes['hr-style']}/>Rent a Car</h1>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
