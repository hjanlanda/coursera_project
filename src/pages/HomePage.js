import React from 'react';
import Flex from '../components/UI/Flex';
import CallToAction from '../components/sections/CallToAction';
import Specials from '../components/sections/Specials';
import Testimonials from '../components/sections/Testimonials';
import AboutUs from '../components/sections/AboutUs';

const HomePage = () => {
  return (
    <Flex direction={'column'} gap={150}>
      <CallToAction />
      <Specials />
      <Testimonials />
      <AboutUs />
      <Flex />
    </Flex>
  );
};

export default HomePage;
