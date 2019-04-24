
export const getAssets = (state) => state.assets.data

export const getIsLoading = (state) => state.assets.isLoading

export const getCurrentAsset = (state) => state.assets.current

export const getUrlSlug = ({ match: { params } }) => params.urlSlug

export const getQueryFromUrl = (props) => props.match.params.query