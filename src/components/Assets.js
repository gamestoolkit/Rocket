import React from 'react';
import Asset from './Asset';

const Assets = ({ assets }) => (
  <>    
    { assets.map(asset =>      
      <Asset asset={asset} />
    )}
  </>
) 

export default Assets