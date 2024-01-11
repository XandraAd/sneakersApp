/* eslint-disable no-unused-vars */
import React from 'react'
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import ThankYouMessageImage from '../assets/thank you message.jpg';

const Feature = ({ title, desc, ...rest }) => {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='xl'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    );
  };


const About = () => {
  return (

    <Stack spacing={10} direction={{ base: 'column', md: 'row' }}>
        <Flex direction={{ base: 'column', lg: '1fr 1fr' }} gap={10}>
        <Feature
        title='Who we are'
        desc='
        Welcome to our Sneaker store, where style meets comfort and quality! Step into the world of sneakers and discover a wide range of trendy and iconic footwear to elevate your fashion game. We curate the latest collections from top brands, ensuring you have access to the most sought-after designs.
        
       From classic silhouettes to cutting-edge innovations, our sneaker store offers something for everyone. Whether you&#39;re a sneakerhead or just looking for a casual pair&#44; we&#39;ve got you covered. Our extensive selection includes sneakers for men, women, and kids, catering to all ages and preferences.'
      />

      <Feature
        title='What we represent'
        desc='
        At our sneaker store, we represent more than just a place to buy shoes. We stand for a lifestyle, a passion, and a community of sneaker enthusiasts'
      />
        </Flex>
        <Box>
  <img src={ThankYouMessageImage} alt="Thank You Message" />
  </Box>
      
    
    <Feature
      title='Why online'
      desc='
      We aim to offers unparalleled convenience shopping for all our customers .You can browse through a wide range of products, compare prices, and make purchases from the comfort of your homes or on the go using your mobile device.
      
    '
    />
  
    
  </Stack>
  

  );
};

export default About