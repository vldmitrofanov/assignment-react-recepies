import { Link } from 'react-router-dom'
import StarRating from '../../app/common/StarRating'
import { observer } from 'mobx-react-lite'

export default observer(function TestRecipeCard({ recipe }) {
  return (
    <div className="four recipe-box columns recipe-card">
      <div className="thumbnail-holder">
        <Link to={`/recipe/${recipe.id}`}>
          <div
            className="thumbnail-box"
            style={{
              backgroundImage: recipe.image
                ? `url(${recipe.image})`
                : 'url(/images/plate.png)',
            }}
          ></div>
          <div className="hover-cover"></div>
          <div className="hover-icon">View Recipe</div>
        </Link>
      </div>

      <div className="recipe-box-content">
        <h3>
          <Link to={`/recipe/${recipe.id}`}>{recipe.post_title}</Link>
        </h3>

        <StarRating rating={recipe.rating} />

        <div className="recipe-meta">
          <i className="fa fa-clock-o"></i> {recipe.cookingTime}
        </div>

        <div className="clearfix"></div>
      </div>
    </div>
  )
})
