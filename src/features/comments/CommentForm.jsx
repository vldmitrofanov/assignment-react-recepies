import { Fragment, useState } from 'react'
import agent from '../../app/api/agent'

export default function CommentForm({ id }) {
  const [rating, setRating] = useState(0)
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [comment, setComment] = useState(null)
  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function validateEmail(em) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(em).toLowerCase())
  }
  function handleSubmit(e) {
    e.preventDefault()
    setError(null)
    if (!name || !email || !validateEmail(email)) {
      setError('Please fill in all the fields required.')
      return
    }
    if (!rating) {
      setError('Please rate the recipe.')
      return
    }
    submitForm(id, {name, email, rating, comment})
  }

  async function submitForm(id, payload) {
    setDisabled(true)
    try {
      const response = await agent.Comments.postComment(id, payload)
      setSubmitted(true)
    } catch (error) {
        setDisabled(false)
      const msg = error.response?.data?.message
      if(msg){
        setError(msg)
      } else {
        setError("An unknown error has occured during message submitting. Please try again later")
      }
    } 
  }

  function handleSetRating(rating) {
      if(!disabled) {
          setRating(rating)
      }
  }

  return (
    <Fragment>
      <h3 className="headline">Add Review</h3>
      <span className="line margin-bottom-35"></span>
      <div className="clearfix"></div>
      {error && (
        <div className="notification error closeable">
          <p>
            <span>Error!</span> {error}
          </p>
          <a className="close" href="#" onClick={() => setError(null)}></a>
        </div>
      )}
      {submitted ? (
        <div className="notification success closeable">
          <p>
            <span>Success!</span> Thank you for your feedback.
          </p>
          <a className="close" href="#"></a>
        </div>
      ) : (
        <form id="add-review" className="add-comment">
          <fieldset>
            <div>
              <label>
                Name: <span>*</span>
              </label>
              <input
                type="text"
                onChange={(event) => setName(event.target.value)}
                disabled={disabled}
              />
            </div>

            <div>
              <label>
                Email: <span>*</span>
              </label>
              <input
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                disabled={disabled}
              />
            </div>

            <div>
              <label>
                Rating: <span>*</span>
              </label>
              <span className="rate">
                <span
                  className={`star ${rating == 5 ? 'selected' : ''}`}
                  onClick={() => handleSetRating(5)}
                ></span>
                <span
                  className={`star ${rating == 4 ? 'selected' : ''}`}
                  onClick={() => handleSetRating(4)}
                ></span>
                <span
                  className={`star ${rating == 3 ? 'selected' : ''}`}
                  onClick={() => handleSetRating(3)}
                ></span>
                <span
                  className={`star ${rating == 2 ? 'selected' : ''}`}
                  onClick={() => handleSetRating(2)}
                ></span>
                <span
                  className={`star ${rating == 1 ? 'selected' : ''}`}
                  onClick={() => handleSetRating(1)}
                ></span>
              </span>
            </div>
            <div className="clearfix"></div>

            <div>
              <label>Comment:</label>
              <textarea
                cols="40"
                rows="3"
                onChange={(event) => setComment(event.target.value)}
                disabled={disabled}
              ></textarea>
            </div>
          </fieldset>

          <a href="#" className={`star button medium ${!disabled ? 'color' : ''}`} onClick={handleSubmit} style={{width:160, textAlign:'center'}}>
          {!disabled ? 'Add Review' : 'Please wait...'}
          </a>
          <div className="clearfix"></div>
        </form>
      )}
    </Fragment>
  )
}
