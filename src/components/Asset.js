import React from 'react'
import { assetType } from '../common/types'
import { Link } from 'react-router-dom';

const Asset = ({ asset }) => {  
  return (    
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <Link to={`/Asset/${asset.urlSlug}`}>
          <img src={asset.featuredImageUrl} className="card-img" />
          <div className="card-body">
            <h5 className="card-title">{asset.title}</h5>
            <p className="card-text">{asset.description}</p>
            <p className="card-text"><small className="text-muted">{asset.tags}</small></p>
          </div>
        </Link>
      </div>
    </div>
  )
}

Asset.propTypes = {
  asset: assetType.isRequired
}

export default Asset
