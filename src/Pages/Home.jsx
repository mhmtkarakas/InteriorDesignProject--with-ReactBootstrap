import React from 'react'
import AboutUs from '../components/AboutUs';
import ServiceCards from '../components/ServiceCards';
import Main from './../components/Main';
import Hizmetlerimiz from './../components/Hizmetlerimiz';


const Home = () => {
  return (
    <div className=''>
      <Main />
      <ServiceCards />
      <AboutUs />
      <Hizmetlerimiz />
    </div>
  )
}

export default Home
