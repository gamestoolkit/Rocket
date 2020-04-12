
export const getAssets = (state) => state.assets.byId ? Object.values(state.assets.byId) : []

export const getFirstsAssets = (state, n) => state.assets.data.slice(0, n)

export const getIsLoading = (state) => state.assets.isLoading

export const getCurrentAsset = (state) => state.assets.current

export const getUrlSlug = ({ query }) => query.urlSlug

export const getQueryFromUrl = (props) => props.router.query.query