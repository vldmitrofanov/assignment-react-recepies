import { React, useEffect, Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import TestRecipeDetails from '../../features/testRecipies/TestRecipeDetails'
import { useParams } from 'react-router'
import { useStore } from '../../app/stores/store'

import NavBar from '../layout/NavBar'
import SocialMediaSide from '../common/SocialMediaSide'

export default observer(function TestRecipeDetailsPage() {
  const {
    testRecipeStore: {
      testRecipe,
      loadTestRecipe,
      loadingRecepies,
      featuredTestRecipies,
      loadFeaturedTestRecipies,
    },
  } = useStore()
  const { id } = useParams()

  useEffect(() => {
    if (id) loadTestRecipe(id)
  }, [id, loadTestRecipe])

  useEffect(() => {
    if (featuredTestRecipies.length <= 1) loadFeaturedTestRecipies()
  }, [])

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
            featuredRecipies={featuredTestRecipies.filter((r) => r.id !== id)}
          />
        )}
        <div className="four columns">
          <div className="widget">
            <div className="author-box">
              <span className="title">Author</span>
              <span className="name">{testRecipe?.user_display_name}</span>
              <span className="contact">
                <a href="mailto:user@domain.tld">user@domain.tld</a>
              </span>
              <img src="/images/author-photo.png" alt="" />
              <p>
                Donec porta mi et magna posuere iaculis. Suspendisse id luctus
                dolor. Sed rhoncus mauris et ultrices ornare. Morbi vitae
                bibendum ligula, id ullamcorper est. Duis et dolor dolor.
                Integer nec sceleris
              </p>
            </div>
          </div>

          <SocialMediaSide />
        </div>
      </div>
    </Fragment>
  )
})
