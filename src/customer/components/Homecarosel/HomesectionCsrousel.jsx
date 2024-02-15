import React from 'react'
import AliceCarousel from 'react-alice-carousel'

const HomesectionCsrousel = () => {
    const responsive={
        0:{items:1},
        568:{items:2},
        1024:{items:4}
    }
   
    return (
        <AliceCarousel
          mouseTracking
          items={items}
          disableButtonsControls
          autoPlay={true}
          responsive={responsive}
          autoPlayInterval={1000}
          controlsStrategy=" alternate"
        />)
}

export default HomesectionCsrousel