import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'next/router'
import { getAssets, getIsLoading, getQueryFromUrl } from '../selectors'
import Assets from '../components/Assets'
import { fetchAssets, filterAssets } from "../actions"
import Spinner from '../components/Spinner'

class AssetsContainer extends React.Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (getQueryFromUrl(prevProps) !== getQueryFromUrl(this.props))
      this.fetchData()
  }

  fetchData() {
    const query = getQueryFromUrl(this.props)
    if (query) {
      this.props.filterAssets(query)
    } else {
      this.props.fetchAssets()
    }
  }

  showingSearchResults(){
    return (<><p>Search results for: <b>{getQueryFromUrl(this.props)}</b></p><hr/></>)
  }

  render(){
    if (this.props.isLoading)
      return <Spinner />
    else   
      return (
        <>
          { getQueryFromUrl(this.props) && this.showingSearchResults()} 
          <Assets assets={this.props.assets} />
        </>
      )
  }
}

const mapStateToProps = (state, ownProps) => ({
  assets: getAssets(state),
  isLoading: getIsLoading(state)
})

export default withRouter(connect(
  mapStateToProps,
  { fetchAssets, filterAssets }
)(AssetsContainer))
