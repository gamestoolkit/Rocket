import Constants from '../common/constants'
import AssetsApi from '../api'

export const fetchingAssets = () => ({
  type: Constants.ACTIONS.FETCHING_ASSETS
})

export const receivingAssets = (assetsData) => ({
  type: Constants.ACTIONS.RECEIVING_ASSETS,
  payload: assetsData
})

export const fetchAssets = () => async(dispatch) => {
  dispatch(fetchingAssets())
  const api = new AssetsApi()
  const assets = await api.findAll()
  dispatch(receivingAssets(assets))
}

export const setCurrentAsset = (assetData) => ({
  type: Constants.ACTIONS.SET_CURRENT_ASSET,
  payload: assetData
})

export const fetchCurrentAsset = (urlSlug) => async(dispatch) => {
  dispatch(fetchingAssets())
  const api = new AssetsApi()
  const asset = await api.findByUrlSlug(urlSlug)
  dispatch(setCurrentAsset(asset))
}

export const filterAssets = (query) => async(dispatch) => {
  dispatch(fetchingAssets())
  const api = new AssetsApi()
  const assets = await api.filter(query)
  dispatch(receivingAssets(assets))
}