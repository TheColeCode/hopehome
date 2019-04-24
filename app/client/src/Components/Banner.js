import React from 'react';
import image from '../Assets/banner.jpg';
import CallToAction from './CallToAction';
import '../Styles/Banner.css';

const Banner = () => {
  return (
    <div className="Banner">
      <img id="bannerImage" src={image} alt="Gathiga Banner" />
      <CallToAction />
    </div>
  );
};

export default Banner;
