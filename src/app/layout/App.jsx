import { Fragment } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import '../../assets/scss/custom.scss'
import TestRecepiesPage from '../pages/TestRecepiesPage'
import TestRecipeDetailsPage from '../pages/TestRecipeDetailsPage'
import AppFooter from './AppFooter'

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={TestRecepiesPage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <Switch>
              <Route path="/recipe/:id" component={TestRecipeDetailsPage} />
            </Switch>
          </Fragment>
        )}
      />
      <AppFooter />
    </Fragment>
  )
}

export default App
