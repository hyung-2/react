import React from 'react'
import Movie from './movie'

function MovieList({ movies }){
  return(
    <>
      {movies.map((movie, id) => {
        return (
          // <Movie 
          // key={id}
          // title={movie.title}
          // language={movie.language}
          // release={movie.release}
          // length={movie.length}
          // author={movie.author}
          // production={movie.production}></Movie>
          // 위와 같이 써도되지만 너무길어서 아래와같이 사용한다
          <Movie key={id}{...movie}></Movie>
        )
      })}
    </>
  )
}

export default MovieList