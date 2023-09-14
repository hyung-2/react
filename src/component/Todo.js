//클래스형 컴포넌트
// import React, { Component } from "react"; // = import React form 'react';

// class Todo extends Component{
//   //데이터 정의 & 초기화
//   constructor(props){ //props:부모 컴포넌트로부터 전달받는 값(데이터)
//     super(props) //Component와 나머지 부모 컴포넌트의 멤버변수 초기화
//     this.state = { //실제 데이터 정의 / this: Todo컴포넌트(현재 해당하는 컴포넌트)
//       name: '방 청소하기',
//       done: true,
//       description: '저녁에 퇴근하고 방 청소하기'
//     }
//   }
//   /* constructor를 빼고 아래처럼 작성해도 똑같이 동작함
//     state = {
//       name: '방 청소하기',
//       done: true,
//       description: '저녁에 퇴근하고 방 청소하기'
//     }
//   */

//   //이벤트 핸들러 함수
//   changeTodoName = () => {
//     this.setState({name: '거실 청소하기'}) //state값 변경
//   }

//   //HTML 템플릿
//   render(){
//     const { name, done, description } = this.state
//     const { user } = this.props //부모에서 전달받은 값
//     return(
//       <>
//         <h2>사용자 : {user}</h2>
//         <h3>할일 제목: {name}</h3>
//         <h4>할일 종료 여부: {done? '종료' : '진행중'}</h4>
//         <p>할일 상세 설명 : {description}</p>
//         <button type="button" onClick={this.changeTodoName}>다른 할일</button>  {/* 인라인 방식의 이벤트 등록 */}
//       </>
//     )
//   }
// }
// //setState로 바뀐값을 다시 템플릿에 랜더링 해서 화면에 보여줌 - 리랜더링(화면을 새로 그림)
// /* const { name, done, description } = this.state 이부분을 제외하면
//     <h2>사용자 : {this.state.user}</h2>
//     <h3>할일 제목: {this.state.name}</h3>
//     이런식으로 사용 가능
// */

// export default Todo

//------------------------------------------------------------------------------------
//함수형 컴포넌트
import React from "react"; //jsx 문법 사용

function Todo({ user, name, done, description }){
  return(
    <>
      <h2>사용자 : {user}</h2>
      <h3>할일 제목: {name}</h3>
      <h4>할일 종료 여부: {done? '종료' : '진행중'}</h4>
      <p>할일 상세 설명 : {description}</p>
    </>
  )
}

export default Todo