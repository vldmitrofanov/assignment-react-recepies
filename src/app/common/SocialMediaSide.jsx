export default function SocialMediaSide() {
  return (
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
  )
}
