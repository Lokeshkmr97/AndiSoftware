import React from 'react';

const cardData = [
  {
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkvW3qywMMDofu1J6jmG8mUrX-UHT3zQWHktROb63Q7tVMzPpD',
    title: 'Artificial Intelligence',
    content: 'Artificial Intelligence (AI) is a field of computer science that focuses on creating smart machines capable of performing tasks that typically require human intelligence. AI systems use algorithms to learn from data, recognize patterns, make decisions, and solve complex problems. AI is transforming industries like healthcare, finance, and transportation, revolutionizing how we live and work.1.',
  },
  {
    imageUrl: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlNuAY-JwZ0mFxQ06IR1YyJ3ytS-bZ0W4LGqGCB3_4L1whYjtx',
    title: 'Data Analytics',
    content: 'Data analytics is the process of examining large sets of data to uncover hidden patterns, trends, and insights. It involves collecting, cleaning, and analyzing data to make informed decisions. Organizations use data analytics to optimize operations, improve customer experiences, and drive innovation. It plays a crucial role in today data-driven world.',
  },
  {
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRDlPl664_uy3PpPgHwjbpmSrFwLgLoamty-dYmalXuKOON7YD',
    title: 'Enterprise Architecture',
    content: 'Enterprise architecture is a strategic approach to aligning an organizations business and IT infrastructure. It involves creating a blueprint that defines how different components, such as processes, systems, and data, work together to achieve business objectives. Enterprise architects play a crucial role in ensuring efficient operations and enabling digital transformation.',
  },
  {
    imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRsZUCklQOgzJ0ANKgo6W1YX58vPqIJZulmt6KUkJivlCtD24Wp',
    title: 'Emerging Technologies',
    content: 'Emerging technologies refer to innovative advancements that have the potential to significantly impact various industries. Examples include artificial intelligence, blockchain, and quantum computing. These technologies often disrupt traditional practices, driving progress, efficiency, and new opportunities while presenting challenges related to ethics, security, and regulation.',
  },
];

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cardData.map((card, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-center items-center">
          {/* Image Div */}
          <div className="w-1/2">
            <img
              src={card.imageUrl}
              alt={`Card Image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content Div */}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{card.title}</h2>
            <p className="text-sm text-gray-600 text-justify">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
