import React from 'react';

const servicesData = [
  {
    title: 'ANDi AMC',
    image: 'https://andisoftwaresolutions.com/3.jpg',
    sector: 'Business',
    description: 'Suitable for all kinds of service providers for managing and recording their annual maintenance contracts online with a detailed customer and service database.',
    price: 'INR 25,200 + GST'
  },
  {
    title: 'ANDi Barcode',
    image: 'https://andisoftwaresolutions.com/7.jpg',
    sector: 'Business',
    description: 'Easy cloud base generation and printing of barcode suitable for any kind of products.',
    price: 'INR 7,200 + GST',
  },
  {
    title: 'ANDi Business ERP',
    image: 'https://andisoftwaresolutions.com/5.jpg',
    sector: 'Business',
    description: 'Advanced business ERP to manage Multiple business & Multiple location warehouses efficiently. It has a powerful user and role management module with advanced product management functions. Its inbuilt Contacts management module for customers as well as suppliers supports Purchase, Sales, and Expense management with payment alerts. This ERP is equipped with Tax / tax groups function and has a customize invoice & product labels printing options with details report generation. This Business ERP is a must for growing organizations.',
    price: 'INR 25,200 + GST'
  },
  {
    title: 'ANDi Call Centre',
    image: 'https://andisoftwaresolutions.com/4.jpg',
    sector: 'Business',
    description: 'Advanced call center management portal covering all major activitites to run call center operations.',
    price: 'INR 32,400 + GST',
  },
  {
    title: 'ANDi Crowd Funding',
    image: 'https://andisoftwaresolutions.com/25.jpg',
    sector: 'Business',
    description: 'Software to manage online crowd funding functions like donation, Charity funding, Bidding, etc',
    price: 'INR 28,800 + GST',
  },
  {
    title: 'ANDi Courier',
    image: 'https://andisoftwaresolutions.com/27.jpg',
    sector: 'Business',
    description: 'Software designed for courier companies to monitor the logistics of storage and handling of cargo from its booking till final destination efficiently.',
    price: 'INR 18,000 + GST',
  },
];

const CloudSoft = () => {
  return (
    <div className="bg-white-100">
      <h1 className='text-center mt-[70px] text-3xl font-semibold'>OUR CLOUD SERVICES</h1>
      {servicesData.map((service, index) => (
        <div key={index} className="container mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Box (Left) */}
            <div className="md:w-1/3 bg-aqua p-4">
              <div className="h-[320px] md:h-auto">
                <img
                  src={service.image}
                  alt={`image${index + 1}`}
                  className="object-cover w-full h-full rounded-lg h-96"
                />
              </div>
            </div>

            {/* Content Box (Right) */}
            <div className="md:w-1/2 bg-bisque p-4">
              <h1 className='text-center text-3xl font-semibold'>{service.title}</h1>
              <p className="text-base md:text-lg text-justify mt-4">
                <strong>Sector - {service.sector}</strong><br /><br />
                {service.description}
              </p>
              <br />
              <p><strong>List Price: {service.price}</strong></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CloudSoft;
