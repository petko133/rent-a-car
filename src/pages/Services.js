import React, { Fragment } from 'react';
import ServicesBanner from '../components/Layout/services/ServicesBanner';
import ServicesBody from '../components/Layout/services/ServicesBody';

const Services = () => {
  return (
    <Fragment>
      <ServicesBanner />
      <ServicesBody />
    </Fragment>
  );
};

export default Services;
