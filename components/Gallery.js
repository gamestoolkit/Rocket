import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const Gallery = ({ imagesUrl }) => (
  <Carousel>
    { imagesUrl.map(url => 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={url}
        />
      </Carousel.Item>
    )}
  </Carousel>
)

export default Gallery