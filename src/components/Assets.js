import React from 'react';
import Asset from './Asset';

const Assets = ({ assets }) => (
  <>    
    <h1>{process.env.REACT_APP_TITLE}</h1>
    { assets.map(asset =>      
      <Asset asset={asset} />
    )}
  </>
) 

export default Assets