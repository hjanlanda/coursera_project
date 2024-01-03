import React from 'react';
import Flex from '../components/Flex';
import CallToAction from '../components/CallToAction';
import MarginBox from '../components/MarginBox';
import Specials from '../components/Specials';

const HomePage = () => {
  return (
    <Flex direction={'column'}>
      <CallToAction />
      <MarginBox mt={150} />
      <Specials />
    </Flex>
  );
};

export default HomePage;
