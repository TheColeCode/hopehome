import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import image from '../Assets/banner.jpg';
import CallToAction from './CallToAction';

const Banner = () => {
  return (
    <div>
      <img id="bannerImage" src={image} alt="Gathiga Banner" style={{position: 'relative', top: '85px', width:'100vw' }} />
      <CallToAction />
    </div>
  );
};

export default Banner;
