import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'
import Navigation from './Navigation'
import AssetsPage from '../pages/AssetsPage';
import AssetDetailsContainer from '../containers/AssetDetailsContainer';
import history from '../history';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={history} >
      <Navigation />
      <div id="main-container" className="container">
        <Switch>
          <Route path="/" exact component={AssetsPage} />
          <Route path="/Asset/:urlSlug?" component={AssetDetailsContainer} />
          <Route path="/Search/:query?" component={AssetsPage} />
        </Switch>
      </div>
    </Router>
  </Provider>
)

export default Root
