import React from 'react'
import AssetsContainer from '../containers/AssetsContainer'
import SearchBar from '../components/SearchBar';
import AssetsSlideContainer from '../containers/AssetsSlideContainer';

const AssetsPage = () => ( 
  <>
    <AssetsSlideContainer />    
    <div className="mt-4">
      <AssetsContainer />
    </div>
  </>
)

export default AssetsPage