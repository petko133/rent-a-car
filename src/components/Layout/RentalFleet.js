import React, { useState } from 'react';
import carsData from '../../assets/data/data';

const RentalFleet = () => {
  const [active, setActive] = useState(false);
  const [carInfo, setCarInfo] = useState(1);
	const [loading, setLoading] = useState(false);

  const carHandler = (e) => {
		setLoading(true)
    e.preventDefault();
    setCarInfo(parseInt(e.target.getAttribute('value')));
		setLoading(false)
  };

  return (
    <div className="hero-center">
      <div className="center-align hide">
        <h3>Vehicle Models</h3>
        <h1>Our rental fleep</h1>
        <p>
          Chose from a variety of amazing vehicles to rent for your next
          adventure or any try.
        </p>
      </div>
      <div className="rental-fleet">
        <section>
          {carsData.map((car) => {
            return (
              <a
                key={car.id}
                value={car.id}
                href="/"
                type="button"
                className={`btn-cars ${carInfo === car.id && 'active'}`}
                onClick={(e) => carHandler(e)}
              >
                {car.name}
              </a>
            );
          })}
        </section>
        <section>					
          {loading ? <h2 className='center-align'>Loading...</h2> : carsData.map((car) => {
            if (carInfo === car.id) {
              return <img key={car.id} src={car.img[car.name.toLowerCase()]} alt="car" />;
            }
          })}
        </section>
        <section style={{ display: 'grid' }}>
          {carsData.map((car) => {
            if (carInfo === car.id) {
              return (
                <table key={car.id} className="customTable">
                  <thead>
                    <tr>
                      <th colSpan="2">
                        <font size="5">${car.price}</font> / rent per day
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>{car.name}</td>
                    </tr>
                    <tr>
                      <td>Model</td>
                      <td>{car.model}</td>
                    </tr>
                    <tr>
                      <td>Year</td>
                      <td>{car.year}</td>
                    </tr>
                    <tr>
                      <td>Doors</td>
                      <td>{car.doors}</td>
                    </tr>
                    <tr>
                      <td>AC</td>
                      <td>{car.ac}</td>
                    </tr>
                    <tr>
                      <td>Transmission</td>
                      <td>{car.transmission}</td>
                    </tr>
                    <tr>
                      <td>Fuel</td>
                      <td>{car.fuel}</td>
                    </tr>
                  </tbody>
                </table>
              );
            }
          })}
          <button className="btn-reserve">Reserve now</button>
        </section>
      </div>
    </div>
  );
};

export default RentalFleet;
