import React from 'react';
import Banner from '../components/Layout/Banner';
import BookCar from '../components/Layout/BookCar';
import RentalInfo from '../components/Layout/RentalInfo';
import RentalFleet from '../components/Layout/RentalFleet';
import SaveBig from '../components/Layout/SaveBig';
import ChooseUs from '../components/Layout/ChooseUs';
import Footer from '../components/Layout/Footer';

const Home = () => {
  return (
    <section className="hero">
      <Banner />
      <BookCar />
      <RentalInfo />
      <RentalFleet />
			<SaveBig />
			<ChooseUs/>
      <Footer />
    </section>
  );
};

export default Home;
