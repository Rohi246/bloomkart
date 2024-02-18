import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import HomesectoinCard from '../cards/HomesectoinCard';

const HomesectionCsrousel = ({ section_title, data }) => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className='relative px-4 lg:px-8 flex flex-col'>
      <div className="relative p-5">
        <div className='ml-20'>
          <p className='text-black font-semibold'>{section_title}</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start', zIndex: '40' }}>
          {/* Add any necessary buttons or controls here */}
        </div>
        <Carousel responsive={responsive}>
          {data.map((item) => 
            <HomesectoinCard  src={item.image} brandName={item.brand} description={item.title}/>
          )}
        </Carousel>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          {/* Add any necessary buttons or controls here */}
        </div>
      </div>
    </div>
  );
};

export default HomesectionCsrousel;
