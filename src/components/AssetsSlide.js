import React from 'react'
import Gallery from './Gallery'
import Spinner from './Spinner';

const AssetsSlide = ({ assets, isLoading }) => {
  if (isLoading || !assets)
      return <Spinner />
  else {    
    const imagesUrl = assets.map((asset) => asset.imagesUrl[0])
    return <Gallery imagesUrl={imagesUrl} />
  }    
}

export default AssetsSlide