export default function StarRating({ rating }) {
  const stars = ['zero', 'one', 'two', 'three', 'four', 'five']
  rating = parseInt(rating) > 0 ? parseInt(rating) : 0

  if (rating > 0) {
    return (
      <div className={`rating ${stars[rating]}-stars`}>
        <div className="star-rating"></div>
        <div className="star-bg"></div>
      </div>
    )
  } else {
    return <div />
  }
}
