import { React, Fragment } from 'react'
import { observer } from 'mobx-react-lite'
import SocialMedia from '../../app/common/SocialMedia'
import TestRecipeCard from './TestRecipeCard'
import StarRating from '../../app/common/StarRating'
import Comment from '../comments/Comment'
import { format } from 'date-fns'
import CommentForm from '../comments/CommentForm'

export default observer(function TestRecipeDetails({
  recipe,
  featuredRecipies,
}) {
  return (
    <div className="twelve columns">
      <div className="alignment">
        <section className="recipe-header">
          <div className="title-alignment">
            <h2>{recipe.post_title}</h2>
            <StarRating rating={recipe.rating} />
            {parseInt(recipe.comment_count) > 0 && (
              <span>
                <a href="#reviews">({recipe.comment_count} reviews)</a>
              </span>
            )}
          </div>
        </section>

        <div
          className="recipeSlider rsDefault"
          style={{
            backgroundImage: recipe.image
              ? `url(${recipe.image})`
              : 'url(/images/plate.png)',
          }}
        ></div>

        <section className="recipe-details" >
          <ul>
            <li>
              Serves:{' '}
              <strong >{recipe.servings} people</strong>
            </li>
            <li>
              Cooking: <strong >{recipe.cookingTime}</strong>
            </li>
          </ul>
          <a href="#" className="print">
            <i className="fa fa-print"></i> Print
          </a>
          <div className="clearfix"></div>
        </section>

        <p >{recipe.post_excerpt}</p>

        <h3>Directions</h3>
        <div
          className="directions"
          dangerouslySetInnerHTML={{ __html: recipe.post_content }}
        />

        <SocialMedia />

        <div className="clearfix"></div>

        <div className="post-meta">
          By{' '}
          <a href="#" >
            {recipe.user_display_name}
          </a>
          , on{' '}
          <span content="2014-30-10">
            {format(new Date(recipe.post_date_gmt), 'dd MMM yyyy')}
          </span>
        </div>

        <div className="margin-bottom-40"></div>

        {featuredRecipies.length > 0 && (
          <Fragment>
            <h3 className="headline">You may also like</h3>
            <span className="line margin-bottom-35"></span>
            <div className="clearfix"></div>

            <div className="related-posts">
              {featuredRecipies.map((featuredRecipe, index) => {
                if (index < 3)
                  return <TestRecipeCard recipe={featuredRecipe} key={`trc${index}`} />
              })}
            </div>
            <div className="clearfix"></div>

            <div className="margin-top-15"></div>
          </Fragment>
        )}

        <h3 className="headline">
          Reviews{' '}
          <span className="comments-amount">({recipe.comment_count})</span>
        </h3>
        <span className="line"></span>
        <div className="clearfix"></div>

        <section className="comments" id="reviews">
          {recipe.comments && recipe.comments.length > 0 ? (
            <ul>
              {recipe.comments.map((comment) => (
                <li key={comment.comment_ID}>
                  <Comment comment={comment} />
                </li>
              ))}
            </ul>
          ) : (
            <span>
              There is no one has reviewed this recipe. Be the first one
            </span>
          )}
        </section>

        <div className="clearfix"></div>
        <br />
        <CommentForm id={recipe.id} />
      </div>
    </div>
  )
})
