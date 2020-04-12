import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const configureStore = (options) => {  
  let composeEnhancers = compose
  if (process.env.NODE_ENV !== 'production' && !options.isServer) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  }
  
  const store = createStore(
      reducers,
      composeEnhancers(applyMiddleware(thunk))
  )

  return store
}

export default configureStore
