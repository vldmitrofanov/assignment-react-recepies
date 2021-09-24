import { React, Fragment } from 'react'
import HomeSlider from '../../features/testRecipies/HomeSlider'
import TestRecepiesList from '../../features/testRecipies/TestRecepiesList'
import SocialMediaSide from '../common/SocialMediaSide'
import NavBar from '../layout/NavBar'

export default function TestRecepiesPage() {
  return (
    <Fragment>
      <NavBar />
      <HomeSlider />
      <div className="container">
        <TestRecepiesList />
        <div className="four columns">
          <div className="widget">
            <h4 className="headline">Categories</h4>
            <span className="line margin-bottom-20"></span>
            <div className="clearfix"></div>

            <ul className="categories">
              <li>
                <a href="#">
                  Not Implemented <span>(2)</span>
                </a>
              </li>
            </ul>
          </div>

          <SocialMediaSide />
        </div>
      </div>
    </Fragment>
  )
}
