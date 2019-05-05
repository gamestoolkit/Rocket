import React from 'react'
import AssetsContainer from '../containers/AssetsContainer'
import SearchBar from '../components/SearchBar'
import AssetsSlideContainer from '../containers/AssetsSlideContainer'

const AssetsPage = () => ( 
  <>
    <div className="call-action">
      <div className="center">
        <center>
          <h1>Build your videogame</h1>
          <h2>With this free and curated assets library</h2>        
        </center>
      </div>
    </div>
    <div id="main-container" className="container">
      <AssetsSlideContainer />    
      <div className="mt-2">
        <AssetsContainer />
      </div>
    </div>
  </>
)

export default AssetsPage