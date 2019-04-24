import React from 'react';
import Button from './Button';

const CallToAction = () => {
  const CallToAction = {
    backgroundImage: '-webkit-linear-gradient(left, rgba(0,0,0,.5), rgba(0,0,0,0))',
    color: '#fff',
    position: 'absolute',
    top: '20%',
    fontFamily: 'Amatic SC, cursive',
    textShadow: '1px 1px 1px black'
  };

  const Blurbs = {
    marginLeft: '20px'
  };

  const HeadingBlurb = {
    fontSize: '3em',
    margin: '1rem 0'
  };

  const Blurb = {
    fontSize: '2em',
    margin: '1rem 0 2rem'
  };

  return (
    <div style={CallToAction}>
      <div style={Blurbs}>
        <h2 style={HeadingBlurb}>Discover the Impact</h2>
        <h4 style={Blurb}>Volunteer in Kenya at Hope Home</h4>
        <Button />
      </div>
    </div>
  );
};

export default CallToAction;
