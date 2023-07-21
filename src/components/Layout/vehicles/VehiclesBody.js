import React, { useRef, useState } from 'react';
import classes from './Vehicles.module.css';
import data from '../../../assets/data/data';
import { getActiveElement } from '@testing-library/user-event/dist/utils';

const ServicesBody = () => {
  const [hover, setHover] = useState(false);
  const container = useRef(null);
  // console.log(container.current.style);

  const onHover = (e) => {
    e.preventDefault();
    // console.log(e.target);
    setHover(true);
  };

  const onHoverOver = (e) => {
    e.preventDefault();
    setHover(false);
  };

  // const carImg = (car) => {
  //   return (
  //     <div className={classes['items-aligning']}>
  //       <h3 className={classes['h3-3rem']}>{car.name}</h3>
  //       <div className={classes['float-div-img']}>
  //         <img
  //           key={car.id}
  //           src={car.img[car.name.toLowerCase()]}
  //           alt="promCar"
  //           className={classes['prom-car']}
  //           onMouseEnter={(e) => onHover(e)}
  //           onMouseLeave={(e) => onHoverOver(e)}
  //         />
  //       </div>
  //       <h4>Model: {car.model}</h4>
  //       <a href="/vehicles" className="btn">
  //         Book Now
  //       </a>
  //     </div>
  //   );
  // };

  // const carDetails = (car) => {
  //   return (
  //     <div onMouseLeave={(e) => onHoverOver(e)}>
  //       <h3>Model</h3>
  //       <h3>Model</h3>
  //       <h3>Model</h3>
  //     </div>
  //   );
  // };

  return (
    <>
      <div className="align-center">
        <h1 className={`align-center ${classes['h1-3rem']}`}>
          This is only part of our big fleet of Vehicles:
        </h1>
      </div>
      <div className="hero">
        <div
          className="hero-center-grid-tree"
          onMouseLeave={(e) => onHoverOver(e)}
        >
          {data.map((car) => {
            return (
              <>
                <div
                  key={car.id}
                  class={classes['flex-item']}
                  ref={container}
                  onMouseEnter={(e) => onHover(e)}
                  onMouseLeave={(e) => onHoverOver(e)}
                >
                  {/* {!hover ? carImg(car) : carDetails(car)} */}
                  <div className={`${classes['items-aligning']}`}>
                    <h3 className={classes['h3-3rem']}>{car.name}</h3>
                    <div className={classes['float-div-img']}>
                      <img
                        key={car.id}
                        src={car.img[car.name.toLowerCase()]}
                        alt="promCar"
                        className={classes['prom-car']}
                      />
                    </div>
                    <h4>Model: {car.model}</h4>
                    <a href="/vehicles" className="btn">
                      Book Now
                    </a>
                  </div>
                  <div
                    className={classes['car-detail']}
                    onMouseLeave={(e) => onHoverOver(e)}
                  >
                    <table class={classes["carDetailsTable"]}>
                      <thead>
                        <tr>
                          <th colSpan='2'>Car details:</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Brand</td>
                          <td>{car.name}</td>
                        </tr>
                        <tr>
                          <td>Model</td>
                          <td>{car.model}</td>
                        </tr>
                        <tr>
                          <td>Transmission</td>
                          <td>{car.transmission}</td>
                        </tr>
                        <tr>
                          <td>Fuel</td>
                          <td>{car.fuel}</td>
                        </tr>
                        <tr>
                          <td>Doors</td>
                          <td>{car.doors}</td>
                        </tr>
                        <tr>
                          <td>Year</td>
                          <td>{car.year}</td>
                        </tr>
                      </tbody>
                    </table>
										<a href="/vehicles" className="btn">
                      Book Now
                    </a>

                    {/* <h3>Brand: {car.name}</h3>
                    <h3>Model: {car.model}</h3>
                    <h3>Transmition: {car.transmission}</h3>
                    <h3>Fuel: {car.fuel}</h3>
                    <h3>Doors: {car.doors}</h3>
                    <h3>Year: {car.year}</h3> */}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesBody;
