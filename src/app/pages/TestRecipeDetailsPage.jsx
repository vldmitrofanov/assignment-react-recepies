import { React, useEffect, Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import TestRecipeDetails from '../../features/testRecipies/TestRecipeDetails'
import { useParams } from 'react-router'
import { useStore } from '../../app/stores/store'

import NavBar from '../layout/NavBar'

export default observer(function TestRecipeDetailsPage() {
  const {
    testRecipeStore: {
      testRecipe,
      loadTestRecipe,
      loadingRecepies,
      featuredTestRecipies,
      loadFeaturedTestRecipies
    },
  } = useStore()
  const { id } = useParams()

  useEffect(() => {
    if (id) loadTestRecipe(id)
  }, [id, loadTestRecipe])

  useEffect(() => {
    if (featuredTestRecipies.length <= 1) loadFeaturedTestRecipies()
  }, [featuredTestRecipies, loadFeaturedTestRecipies])

  return (
    <Fragment>
      <NavBar />
      <div className="recipeBackground" style={{ height: 140 }} />

      <div className="container">
        {(loadingRecepies || !testRecipe) && (
          <div className="twelve columns">Loading...</div>
        )}
        {testRecipe && testRecipe.id && (
          <TestRecipeDetails
            recipe={testRecipe}
            featuredRecipies={featuredTestRecipies.filter(
              (r) => r.id !== id,
            )}
          />
        )}
        <div className="four columns">
          <div className="widget">
            <div className="author-box">
              <span className="title">Author</span>
              <span className="name">
                {testRecipe?.user_display_name}
              </span>
              <span className="contact">
                <a href="mailto:user@domain.tld">user@domain.tld</a>
              </span>
              <img src="/images/author-photo.png" alt="" />
              <p>
              Donec porta mi et magna posuere iaculis. Suspendisse id luctus dolor. Sed rhoncus mauris et ultrices ornare. Morbi vitae bibendum ligula, id ullamcorper est. Duis et dolor dolor. Integer nec sceleris
              </p>
            </div>
          </div>

          <div className="widget">
            <h4 className="headline">Popular Recipes</h4>
            <span className="line margin-bottom-30"></span>
            <div className="clearfix"></div>

            <a href="#" className="featured-recipe">
              <img src="images/featuredRecipe-01.jpg" alt="" />

              <div className="featured-recipe-content">
                <h4>Choclate Cake With Green Tea Cream</h4>

                <div className="rating five-stars">
                  <div className="star-rating"></div>
                  <div className="star-bg"></div>
                </div>
              </div>
              <div className="post-icon"></div>
            </a>

            <a href="#" className="featured-recipe">
              <img src="images/featuredRecipe-02.jpg" alt="" />

              <div className="featured-recipe-content">
                <h4>Mexican Grilled Corn Recipe</h4>

                <div className="rating five-stars">
                  <div className="star-rating"></div>
                  <div className="star-bg"></div>
                </div>
              </div>
              <div className="post-icon"></div>
            </a>

            <a href="#" className="featured-recipe">
              <img src="images/featuredRecipe-03.jpg" alt="" />

              <div className="featured-recipe-content">
                <h4>Pollo Borracho With Homemade Tortillas</h4>

                <div className="rating five-stars">
                  <div className="star-rating"></div>
                  <div className="star-bg"></div>
                </div>
              </div>
              <div className="post-icon"></div>
            </a>

            <div className="clearfix"></div>
          </div>

          <div className="widget">
            <h4 className="headline">Share</h4>
            <span className="line margin-bottom-30"></span>
            <div className="clearfix"></div>

            <ul className="share-buttons">
              <li className="facebook-share">
                <a href="#">
                  <span className="counter">1,234</span>
                  <span className="counted">Fans</span>
                  <span className="action-button">Like</span>
                </a>
              </li>

              <li className="twitter-share">
                <a href="#">
                  <span className="counter">863</span>
                  <span className="counted">Followers</span>
                  <span className="action-button">Follow</span>
                </a>
              </li>

              <li className="google-plus-share">
                <a href="#">
                  <span className="counter">902</span>
                  <span className="counted">Followers</span>
                  <span className="action-button">Follow</span>
                </a>
              </li>
            </ul>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </Fragment>
  )
})
