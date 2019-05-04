import { connect } from 'react-redux';
import AssetsSlide from '../components/AssetsSlide';
import { getFirstsAssets, getIsLoading } from '../selectors';

const mapStateToProps = state => ({
  assets: getFirstsAssets(state, 3),
  isLoading: getIsLoading(state)
})

export default connect(mapStateToProps)(AssetsSlide)
