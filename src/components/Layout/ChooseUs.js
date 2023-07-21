import React from 'react';
import {
  FaChevronRight,
  FaCarAlt,
  FaMoneyBill,
  FaMoneyBillWave,
} from 'react-icons/fa';
import classes from './ChooseUs.module.css';

const ChooseUs = () => {
  return (
    <div className="hero">
      <div className={classes['choose-us']}>
        <article className={classes['p-padding-large']}>
          <h3>Why coose us!</h3>
          <h2>Best value deals you will ever find</h2>
          <p>
            Discover the best deals you will ever find with our unbeatable
            offers. We're dedivated to providing you with te best value for your
            money and the best experiance you can get. Our deals are designed to
            give you the uldimate renting experiense, so don't miss out on your
            chance!
          </p>
          <button className="btn">
            Find Details{' '}
            <i className="space-between">
              <FaChevronRight />
            </i>
          </button>
        </article>
        <article>
          <article className={classes['choose-us-reasons']}>
            <div className={classes["p-padding"]}>
              <i className={classes["icon-color"]}>
                <FaCarAlt size='4x' />
              </i>
            </div>
            <div>
              <h3>Cross Country Drive</h3>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles.
              </p>
            </div>
          </article>
          <article className={classes['choose-us-reasons']}>
            <div className={classes["p-padding"]}>
              <i className={classes["icon-color"]}>
                <FaMoneyBill size='4x'/>
              </i>
            </div>
            <div>
              <h3>All Inclusive Pricing!</h3>
              <p>
                Get everything you need in one convenient transparent price.
              </p>
            </div>
          </article>
          <article className={classes['choose-us-reasons']}>
            <div className={classes["p-padding"]}>
              <i className={classes["icon-color"]}>
                <FaMoneyBillWave size='4x' />
              </i>
            </div>
            <div>
              <h3>No Hidden Fees</h3>
              <p>Enjoy peace of mind with our no hidden fees policy</p>
            </div>
          </article>
        </article>
      </div>
    </div>
  );
};

export default ChooseUs;
