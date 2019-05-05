import React from 'react'
import Disqus from 'disqus-react'
import { assetType } from '../common/types'
import Constants from '../common/constants'
import Gallery from './Gallery'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom'

const AssetDetails = ({ asset }) => { 
  const disqusShortname = Constants.DISQUS_SHORTNAME
  const disqusConfig = {
    url: `http://${disqusShortname}.com/${asset.urlSlug}`,
    identifier: asset.id,
    title: asset.title
  }  

  return (    
  <>
    <Row>
      <Col>
        <h1>{asset.title}</h1>
        <Link to='/Asset/fabric-materials-56-pack'>GO</Link>
        {asset.imagesUrl && <Gallery imagesUrl={asset.imagesUrl} />}
      </Col>
      <Col></Col>
    </Row>
    <hr />
    <Row>
      <Col>
        <h2>Discussion</h2>
        <Disqus.CommentCount 
          shortname={disqusShortname} 
          config={disqusConfig}>
            Comments
        </Disqus.CommentCount>
        <Disqus.DiscussionEmbed 
          shortname={disqusShortname} 
          config={disqusConfig} />
      </Col>
    </Row>
  </>
  )
}

AssetDetails.propTypes = {
  asset: assetType.isRequired
}

export default AssetDetails