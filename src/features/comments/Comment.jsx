import { Fragment } from 'react'
import StarRating from '../../app/common/StarRating'
import { format } from 'date-fns';

export default function Comment({ comment }) {
  return (
    <Fragment>
      <div className="avatar">
        <img
          src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
          alt=""
        />
      </div>
      <div className="comment-content">
        <div className="arrow-comment"></div>
        <div className="comment-by">
          <strong>{comment.comment_author}</strong>
          <span className="date">{format(new Date(comment.comment_date_gmt), 'dd MMM yyyy')}</span>
        </div>
        <p>{comment.comment_content}</p>
        <StarRating rating={comment.rating} />
      </div>
    </Fragment>
  )
}
