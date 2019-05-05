import React from 'react'
import Disqus from 'disqus-react'
import { assetType } from '../common/types'
import Constants from '../common/constants'
import Gallery from './Gallery'

const AssetDetails = ({ asset }) => { 
  const disqusShortname = Constants.DISQUS_SHORTNAME
  const disqusConfig = {
    url: `http://${disqusShortname}.com/${asset.urlSlug}`,
    identifier: asset.id,
    title: asset.title
  }  

  return (    
  <>
    <h1>Free Asset</h1>
    <div className="row">
      <div className="col">
        {asset.imagesUrl && <Gallery imagesUrl={asset.imagesUrl} />}
      </div>
      <div className="col">
        <h2>{asset.title}</h2>
        <h3>Description</h3>
        <p>
          {asset.description}
        </p>

        <h4>Source</h4>
        <p>{asset.source}</p>

        <a 
          className="btn btn-primary" 
          href={asset.sourceUrl} 
          target="_blank" 
          rel="noopener noreferrer">
            DOWNLOAD
        </a>
      </div>
    </div>

    <hr/>

    <div className="row">
      <div className="col">
        <h2>Discussion</h2>
        <Disqus.CommentCount 
          shortname={disqusShortname} 
          config={disqusConfig}>
            Comments
        </Disqus.CommentCount>
        <Disqus.DiscussionEmbed 
          shortname={disqusShortname} 
          config={disqusConfig} />
      </div>
    </div>
  </>
  )
}

AssetDetails.propTypes = {
  asset: assetType.isRequired
}

export default AssetDetails