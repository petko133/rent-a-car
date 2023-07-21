import React from 'react';
import classes from './About.module.css';

const AboutBody = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <h1 className={classes.header}>About Rent A Car</h1>
        <p className={classes['p-font']}>
          Rent A Car is the leading national car rental company in Bulgaria. We
          operate with the largest fleet in the country, which currently
          consists of over 2000 cars, 90% of which are brand new or up to 3
          years old. We offer national coverage of the service through more than
          13 offices in the country and deliveries to every Bulgarian city and
          resort, as well as to major airports in the Balkans.
        </p>
        <h1 className={classes.header}>Our Mission</h1>
        <p className={classes['p-font']}>
          Providing professional high quality car rental service to our
          customers is the main goal of Rent A Car. We pay particular attention
          to the customer satisfaction measurement and improvement. We achieved
          to be #1 rated car rental company operating in Bulgaria (according to
          ReviewCentre, TrustPilot, GoogleLocal) and we keep improving the
          quality by providing professional service, technical innovations, new
          cars and competitive prices.
        </p>
        <h1 className={classes.header}>Milestone</h1>
        <ul>
          <li>
            <p className={classes['dots']}>
              2023 - Newly opened offices near Burgas and Varna airports, as
              well as Plovdiv Airport.
            </p>
          </li>
          <li>
            <p className={classes['dots']}>
              2022 - We have developed the first automated online affiliate
              program for rental cars in Bulgaria
            </p>
          </li>
          <li>
            <p className={classes['dots']}>
              2022 - Open head office in Sofia, next to Sofia Airport and
              Sofiyska Sveta Gora Metro Station.
            </p>
          </li>
          <li>
            <p className={classes['dots']}>
              2022 - We have increased our fleet and now operate more than 2000
              new cars, the company's employees are over 160
            </p>
          </li>
          <li>
            <p className={classes['dots']}>
              2021 - New city office in Sofia next to Alexander Malinov Metro
              Station, Shell petrol station
            </p>
          </li>
          <li>
            <p className={classes['dots']}>
              2020 - New office in Plovdiv, 221 "6-ti Septemvri" bldv. (Billa
              parking lot)
            </p>
          </li>
          <li>
            <p className={classes['dots']}>
              2019 - Rent A Car increases its car fleet to +1800 cars
            </p>
          </li>
          <li>
            <p className={classes['dots']}>
              2018 - New office locations Sofia Airport - at Terminal 1 and
              Terminal 2 - Arrivals Hall.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutBody;
