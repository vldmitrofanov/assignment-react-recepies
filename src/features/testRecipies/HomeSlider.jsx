import { React, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../../app/stores/store'
import { Link } from 'react-router-dom'

export default observer(function HomeSlider() {
  const {
    testRecipeStore: { featuredTestRecipies, loadFeaturedTestRecipies },
  } = useStore()
  const [cindex, setCindex] = useState(0)

  useEffect(() => {
    if (featuredTestRecipies.length <= 1) loadFeaturedTestRecipies()
  }, [])

  return (
    <div id="homeSlider" className="royalSlider rsDefaultInv">
      <div className="rsOverflow" >
        <div className="rsContainer">
          {featuredTestRecipies.length > 0 &&
            featuredTestRecipies.map((recipe, index) => (
              <div
                className={`${
                  cindex == index ? 'isActive' : 'inactive'
                } rsContent`}
                key={index}
              >
                <div
                  className="background-image"
                  style={{
                    backgroundImage: recipe.image
                      ? `url(${recipe.image})`
                      : 'none',
                  }}
                ></div>
                <div
                  className={`${
                    cindex == index ? 'isActive' : ''
                  } SlideTitleContainer rsABlock`}
                >
                  <div className="CaptionAlignment">
                    {recipe.tag && (
                      <div className="rsSlideTitle tags">
                        <ul>
                          <li>{recipe.tag}</li>
                        </ul>
                        <div className="clearfix"></div>
                      </div>
                    )}
                    <h2 className="rsSlideTitle title">
                      <Link to={`/recipe/${recipe.id}`}>{recipe.post_title}</Link>
                    </h2>
                    <div className="rsSlideTitle details">
                      <ul>
                        <li>
                          <i className="fa fa-cutlery"></i> {recipe.servings}{' '}
                          Servings
                        </li>
                        <li>
                          <i className="fa fa-clock-o"></i> {recipe.cookingTime}
                        </li>
                        <li>
                          <i className="fa fa-user"></i> by{' '}
                          <a href="#">{recipe.user_display_name}</a>
                        </li>
                      </ul>
                    </div>
                    <Link to={`/recipe/${recipe.id}`} className="rsSlideTitle button">
                      View Recipe
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="rsNav rsThumbs rsThumbsHor">
        <div className="rsThumbsContainer">
          {featuredTestRecipies.length > 0 &&
            featuredTestRecipies.map((recipe, index) => (
              <div
                className={`rsNavItem rsThumb ${
                  cindex == index ? 'rsNavSelected' : ''
                }`}
                key={index}
                onClick={() => setCindex(index)}
              >
                <i className="rsTmb">{recipe.post_title}</i>
              </div>
            ))}
        </div>
        <div className="rsThumbsArrow rsThumbsArrowLeft rsThumbsArrowDisabled">
          <div className="rsThumbsArrowIcn"></div>
        </div>
        <div className="rsThumbsArrow rsThumbsArrowRight rsThumbsArrowDisabled">
          <div className="rsThumbsArrowIcn"></div>
        </div>
      </div>
    </div>
  )
})

/*style={{
  opacity: cindex == index ? 1 : 0,
  zIndex: cindex == index ? 1 : -1,
}}

*/
