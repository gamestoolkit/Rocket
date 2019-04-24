import React from 'react'
import { assetType } from '../common/types'
import { Link } from 'react-router-dom';

const Asset = ({ asset }) => {  
  return (
    <div className="row">
      <div className="card mb-3">
        <Link to={`/Asset/${asset.urlSlug}`}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={asset.featuredImageUrl} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{asset.title}</h5>
                <p className="card-text">{asset.description}</p>
                <p className="card-text"><small className="text-muted">{asset.tags}</small></p>
              </div>
            </div>
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
