import React from 'react';
import Head from '../../head/head';
import Slider from '../../slider/slider';
import ContactsComponent from '../../contacts/contacts';
import Reviews from '../../reviews/reviews';
import Footer from '../../footer/footer';

const Contacts = () => {
  return (
    <div>
      <Head/>
      <Slider/>
      <ContactsComponent/>
      <Reviews/>
      <Footer/>
    </div>
  );
}

export default Contacts;
  