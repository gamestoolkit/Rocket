import Constants from '../common/constants'

const defaultState = {
  isLoading: true,
  data: [],
  current: null
}

const assets = (state = defaultState, action) => {
  switch(action.type) {
    case Constants.ACTIONS.FETCHING_ASSETS:
      return { 
        ...state, 
        isLoading: true 
      }

    case Constants.ACTIONS.RECEIVING_ASSETS:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }

    case Constants.ACTIONS.SET_CURRENT_ASSET:
      return {
        ...state,
        isLoading: false,
        current: action.payload
      }

    default:
      return state
  }
}

export default assets