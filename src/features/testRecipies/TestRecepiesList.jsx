import { React, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import LinesEllipsis from 'react-lines-ellipsis'
import { useStore } from '../../app/stores/store'
import { Link } from 'react-router-dom'
import StarRating from '../../app/common/StarRating'
import LoadingPostList from '../../app/layout/LoadingPostList'

export default observer(function TestRecepiesList() {
  const {
    testRecipeStore: {
      testRecipies,
      loadTestRecipies,
      loadingRecepies,
      totalPages,
      currentPage,
    },
  } = useStore()

  useEffect(() => {
    if (testRecipies.length <= 1) loadTestRecipies()
  }, [])

  function handlePaginationClick(page, e) {
    e.preventDefault()
    //console.log(page)
    loadTestRecipies(page)
  }

  return (
    <div className="twelve columns ">
      <h3 className="headline">Latest Recipes</h3>
      <span className="line rb margin-bottom-35"></span>
      <div className="clearfix"></div>

      <div className="list-style">
        {loadingRecepies && <LoadingPostList />}

        {testRecipies.length > 0 &&
          testRecipies.map((recipe, index) => (
            <div className="four recipe-box columns" key={index}>
              <div
                className="thumbnail-holder"
                style={{
                  backgroundImage: recipe.image
                    ? `url(${recipe.image})`
                    : 'url(/images/plate.png)',
                }}
              >
                <Link to={`/recipe/${recipe.id}`} as="a">
                  <div className="hover-cover"></div>
                  <div className="hover-icon">View Recipe</div>
                </Link>
              </div>

              <div className="recipe-box-content">
                <h3>
                  <Link to={`/recipe/${recipe.id}`} as="a">
                    {recipe.post_title}
                  </Link>
                </h3>

                <LinesEllipsis
                  className="text-clapm"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                  maxLine="3"
                  text={recipe.post_excerpt}
                />

                <StarRating rating={recipe.rating} />

                <div className="meta-alignment">
                  <div className="recipe-meta recipe-meta-user">
                    <i className="fa fa-user"></i> by{' '}
                    <a href="#">{recipe.user_display_name}</a>
                  </div>
                  <div className="recipe-meta">
                    <i className="fa fa-clock-o"></i> {recipe.cookingTime}
                  </div>
                  <div className="recipe-meta">
                    <i className="fa fa-cutlery"></i> {recipe.servings} servings
                  </div>
                </div>

                <div className="clearfix"></div>
              </div>
            </div>
          ))}
      </div>

      <div className="clearfix"></div>
      {totalPages > 1 && (
        <div className="pagination-container masonry">
          <nav className="pagination">
            <ul>
              {Array.from(Array(totalPages), (e, i) => {
                return (
                  <li key={i}>
                    <a
                      href="#"
                      className={`${
                        i === currentPage - 1 ? 'current-page' : ''
                      }`}
                      onClick={(e) => handlePaginationClick(i + 1, e)}
                    >
                      {i + 1}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <nav className="pagination-next-prev">
            <ul>
              <li>{currentPage > 1 && <a href="#" className="prev" onClick={(e) => handlePaginationClick(1, e)}></a>}</li>
              <li>
                {totalPages > currentPage && <a href="#" className="next" onClick={(e) => handlePaginationClick(totalPages, e)}></a>}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  )
})
