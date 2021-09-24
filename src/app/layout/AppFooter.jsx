import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function AppFooter() {
    const year = (new Date()).getFullYear()
  function newsLetterHandler() {
    alert('Thank you for subscribing')
  }
  return (
    <Fragment>
      <div id="footer">
        <div className="container">
          <div className="five columns">
            <h3 className="headline footer">About</h3>
            <span className="line"></span>
            <div className="clearfix"></div>
            <p>
              Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida
              est fermentum vulputate. Pellentesque et ipsum in dui malesuada
              tempus.
            </p>
          </div>

          <div className="three columns">
            <h3 className="headline footer">Archives</h3>
            <span className="line"></span>
            <div className="clearfix"></div>

            <ul className="footer-links">
              <li>
                <Link to="/">Not Implemented</Link>
              </li>
            </ul>
          </div>

          <div className="three columns">
            <h3 className="headline footer">Recipes</h3>
            <span className="line"></span>
            <div className="clearfix"></div>

            <ul className="footer-links">
              <li>
                <Link to="/">Browse Recipes</Link>
              </li>
            </ul>
          </div>

          <div className="five columns">
            <h3 className="headline footer">Newsletter</h3>
            <span className="line"></span>
            <div className="clearfix"></div>
            <p>
              Sign up to receive email updates on new product announcements,
              gift ideas, sales and more.
            </p>

            <form action="#" method="get">
              <input
                className="newsletter"
                type="text"
                placeholder="mail@example.com"
              />
              <button
                className="newsletter-btn"
                type="submit"
                onClick={newsLetterHandler}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="footer-bottom">
        <div className="container">
          <div className="eight columns">
            © Copyright {year} by <Link to="/">TestRecipies</Link>. All Rights
            Reserved.
          </div>
        </div>
      </div>
    </Fragment>
  )
}
