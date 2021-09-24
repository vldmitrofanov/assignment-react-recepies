import Skeleton from 'react-loading-skeleton'

export default function LoadingPostList() {
  return (
    <>
      {Array.from(Array(3), (e, i) => {
        return (
          <div className="four recipe-box columns" key={i}>
            <div className="thumbnail-holder" style={{marginTop: -4, height:236}} >
              <Skeleton count={1} width={300} height={232} />
            </div>
            <div className="recipe-box-content" style={{height:232}}>
              <Skeleton count={5} />
            </div>
          </div>
        )
      })}
    </>
  )
}
