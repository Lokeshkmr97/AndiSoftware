// About.js
import React from 'react';
import Aboutcard from '../Card/Aboutcard';

const About = () => {
  return (
    <div className="container mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h1 className='text-center text-3xl font-semibold'>About Us</h1>
        <h1 className='underline text-2xl font-bold'>Who We Are</h1>
        <p className="text-base md:text-lg text-justify mt-4">
          We are a team of business and technology visionaries who are passionate about deploying innovative, advanced technology to solve the most challenging enterprise business problems.
        </p>
        <h1 className='text-center text-3xl mt-5 font-bold'>Our Team members are veterans</h1>
        <p className='text-base md:text-lg text-center mt-4'>who have guided companies through the development of enterprise strategies ranging from topics such as</p>
      </div>
      <div className="flex justify-center">
        <Aboutcard />
      </div>
    </div>
  );
};

export default About;
