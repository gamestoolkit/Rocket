import React from 'react'
import { fetchCurrentAsset } from "../actions"
import { getCurrentAsset, getIsLoading, getUrlSlug } from "../selectors"
import { connect } from "react-redux"
import AssetDetails from "../components/AssetDetails"
import { withRouter } from 'react-router'
import Spinner from '../components/Spinner'

class AssetDetailsContainer extends React.Component {
  fetchData() {
    this.props.fetchCurrentAsset(this.props.urlSlug)
  }

  componentDidMount(){
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.urlSlug !== this.props.urlSlug)
      this.fetchData()
  }

  render(){
    if (this.props.isLoading || !this.props.asset)
      return <Spinner />
    else   
      return <AssetDetails asset={this.props.asset} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  urlSlug: getUrlSlug(ownProps),
  asset: getCurrentAsset(state),
  isLoading: getIsLoading(state)
})

export default withRouter(connect(
  mapStateToProps,
  { fetchCurrentAsset }
)(AssetDetailsContainer))
