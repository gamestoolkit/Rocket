import React from 'react'
import Asset from './Asset'

const Assets = ({ assets }) => (
  <div className="row">    
    { assets.map(asset =>      
      <Asset asset={asset} />
    )}
  </div>
) 

export default Assets