import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import AssetsPage from '../pages/AssetsPage'
import history from '../history'
import AssetDetailsPage from '../pages/AssetDetailsPage'
import HomePage from '../pages/HomePage'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Navigation />      
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Assets" component={AssetsPage} />
        <Route path="/Search/:query?" component={AssetsPage} />
        <Route path="/Asset/:urlSlug?" component={AssetDetailsPage} />
      </Switch>      
    </Router>
  </Provider>
)

export default Root
