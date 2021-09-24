import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'
import RecipeSearchForm from '../common/RecipeSearchForm'

export default observer(function NavBar() {
  return (
    <header id="header">
      <div className="container">
        <div className="three columns">
          <div id="logo">
            <h1>
              <Link to="/">
                <img src="/images/logo.png" alt="Chow" />
              </Link>
            </h1>
          </div>
        </div>

        <div className="thirteen columns navigation">
          <nav id="navigation" className="menu nav-collapse">
            <RecipeSearchForm />
          </nav>
        </div>
      </div>
    </header>
  )
})
