import React from 'react';
import Head from '../../head/head';
import Slider from '../../slider/slider';
import Body from '../../body/body';
import Reservation from '../../reservation/reservation';
import Reviews from '../../reviews/reviews';
import Footer from '../../footer/footer';


const Main = () => {
  return (
    <div>
      <Head/>
      <Slider/>
      <Body/>
      <Reservation/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default Main;
  