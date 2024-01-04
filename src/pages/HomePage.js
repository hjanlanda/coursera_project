import React from 'react';
import Flex from '../components/UI/Flex';
import CallToAction from '../components/sections/CallToAction';
import MarginBox from '../components/UI/MarginBox';
import Specials from '../components/sections/Specials';
import Testimonials from '../components/sections/Testimonials';

const HomePage = () => {
  return (
    <Flex direction={'column'}>
      <CallToAction />
      <MarginBox mt={150} />
      <Specials />
      <MarginBox mt={150} />
      <Testimonials />
    </Flex>
  );
};

export default HomePage;
