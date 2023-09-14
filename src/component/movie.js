/* 나머지 연산자 사용 */
import React, { Children } from "react";

// function Movie({ id, title, language, release, length, author, production }){
//   return(
//     <>
//       <h1>무비 정보</h1>
//       <h3>{title}</h3>
//       <h3>{language}</h3>
//       <h3>{release}</h3>
//       <h3>{length}</h3>
//       <h3>{author}</h3>
//       <h3>{production}</h3>
//     </>
//   )
// }

// function Movie({ id, children, ...rest }){ //하나의 객체형태로 묶임(props를 그룹으로 묶음)
//   return(
//     <>
//       <h1>무비 정보</h1>
//       {/* <h3>{rest.title}</h3>
//       <h3>{rest.language}</h3>
//       <h3>{rest.release}</h3>
//       <h3>{rest.length}</h3>
//       <h3>{rest.author}</h3>
//       <h3>{rest.production}</h3> */}

//       {/* 전개 연산자 : 컴포넌트에 한번에 속성을 전달하는 경우 - 보통 p태그 대신 컴포넌트 들어감*/}
//       <p {...rest}></p> {/* 묶여있던 props들을 p 태그에 풀어서 들어감*/}
//       <>{children}</>
//     </>
//   )
// }

// 9월 5일 라이프사이클 활용 - 무비 리스트 보여주기
function Movie({title, genres, cover, summary, year, rating}){
  const style = {
    width: '230px',
    height: '500px',
    background: 'white',
    margin: '10px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  }

  return(
    <div style={style}>
      <img src={cover} alt={title}></img>
      <h3>{title}</h3>
      <h4>{year} ({rating})</h4>
      <h4>{genres.join(' ')}</h4>
      {/* <p>{summary}</p> */}
    </div>
  )
}


export default Movie