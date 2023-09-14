//클래스형 컴포넌트
// import React, { Component } from "react";

// class Person extends Component{
//   // 데이터 초기화 - 옵션

//   // 이벤트 핸들러 - 옵션

//   // HTML 템플릿 - 필수
//   render(){ //화면에 UI를 보여주기 위한 HTML 템플릿 -> JSX 문법
//     // 화면에 보여줄 데이터 정의
//     const name = 'hyung'
//     const age = 30

//     return ( //리턴을 안해주면 화면에 보이지 않음
//       <React.Fragment> {/* div와 유사한 역할 -> 다른 컴포넌트를 감싸주는 역할 */}
//         <h3>{name}</h3>
//         <h4>{age}</h4>
//       </React.Fragment>
//       // 위 아래는 동일하게 동작
//       // <>
//       //   <h3>{name}</h3>
//       //   <h4>{age}</h4>
//       // </>
//     )
//   }
// }

// export default Person

//-------------------------------------------------------------------------------
//함수형 컴포넌트
/* 
  함수형 컴포넌트의 장점
  1.컴포넌트 코드가 간결함
  2. this.state this.props를 사용하지 않음(가독성이 좋음)

  레거시 코드 : 클래스 컴포넌트로만 작성되어 있음 (옛날에 작성한 코드들) - 클래스컴포넌트도 알고있어야 한다

*/
import React from "react";

// function Person(){
//   const name = '사용자'
//   const age = 27
//   return(
//     <>
//       <h3>{name}</h3>
//       <h4>{age}</h4>
//     </>
//   )
// }

//인자로 props 사용시
function Person(props){ //props: 부모컴포넌트에서 전달받은 데이터(객체형태)
  console.log(props)
  return(
    <>
      <h3>{props.name}</h3>
      <h4>{props.age}</h4>
    </>
  )
}
/* 아래처럼 풀어서 사용할수 있다.
function Person({ name, age }){ //= const Person = ({ name, age}) => {
  console.log(name, age)
  return(
    <>
      <h3>{name}</h3>
      <h4>{age}</h4>
    </>
  )
}
*/



export default Person