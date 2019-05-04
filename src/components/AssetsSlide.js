import React from 'react';
import Gallery from './Gallery';

const AssetsSlide = ({ assets, isLoading }) => {
  if (isLoading || !assets)
      return <h1>Loading</h1>
  else {    
    const imagesUrl = assets.map((asset) => asset.imagesUrl[0]);    
    return <Gallery imagesUrl={imagesUrl} />
  }    
}

export default AssetsSlide;