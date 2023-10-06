import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  const desktopImageStyle = {
    width: '100%', // Set the desired width
    height: '700px', // Set the desired height for desktop view
  };

  const mobileImageStyle = {
    width: '100%', // Set the desired width for mobile view
    height: '400px', // Set the desired height for mobile view
  };

  const isMobileView = window.innerWidth <= 768; // Define a breakpoint for mobile view

  const imageUrls = isMobileView
    ? [
        // Add your mobile images here
        'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-vector/vector-concept-illustration-programmer-engineer-with-laptop-sitting-office-desk-holding-pen-while-coding-developing-flat-cartoon-style_270158-379.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-photo/coded-stuff-screen_236854-21687.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-vector/developers-team-flat-design-concept-illustration-people-characters_9209-5416.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-870.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
      ]
    : [
        // Add your desktop images here
        'https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-vector/vector-concept-illustration-programmer-engineer-with-laptop-sitting-office-desk-holding-pen-while-coding-developing-flat-cartoon-style_270158-379.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-photo/coded-stuff-screen_236854-21687.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-vector/developers-team-flat-design-concept-illustration-people-characters_9209-5416.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
    'https://img.freepik.com/premium-vector/web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-website-coding-flat-illustration-banner_128772-870.jpg?size=626&ext=jpg&ga=GA1.2.1930180994.1696311729&semt=ais',
      ];

  const imageStyle = isMobileView ? mobileImageStyle : desktopImageStyle;

  return (
    <div className="container mx-auto mt-4">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        swipeable={false}
        stopOnHover={true}
        showArrows={false}
      >
        {imageUrls.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} style={imageStyle} className="rounded-md" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
