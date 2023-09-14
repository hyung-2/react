import React, { Component, useState, useReducer } from 'react'

//App.js의 App: 부모컴포넌트
// Counter: 자식컴포넌트

// class Counter extends Component{
//   state = {
//     count: 0
//   }

//   increase = () => { //비동기로 작업됨
//     const { count } = this.state
//     console.log(`상태 변경 전: ${count}`)
//     //updater함수(최신 state값 조회,전달)
    // this.setState((prevState) => { 
    //   return {count: prevState.count + 1}
    // })
//     this.setState({count: count + 1})
//     console.log(`상태 변경 후: ${count}`)
//   }
//   // increaseMultiple = () => {
//   //   this.increase()
//   //   this.increase()
//   //   this.increase()
//   //   console.log(`모든 이벤트 호출후: ${this.state.count}`)
//   // }

//   render(){
//     console.log('child')
//     const { count } = this.state
//     console.log(`화면 랜더링: ${count}`)
//     return(
//       <>
//         <h1>{count}</h1>
//         <button onClick={this.increase}> 카운팅 버튼</button>
//       </>
//     )
//   }
// }

//props변경해보기 - 변경은 되지만 하지 않는게 에러를 최소화한다.
//클래스 컴포넌트 : this.props로 접근
//함수 컴포넌트 : props로 접근
// class Counter extends Component{
//   render(){
//     this.props = {user: '성용'}
//     console.log(this.props)

//     return(
//       <>
//         <h1>props 변경하기</h1>
//       </>
//     )
//   }
// }

/* 9월 5일 componentWillUnmount */
// class Counter extends Component{
//   state = {
//     count: 0
//   }

//   componentDidMount(){
//     this.timerId = setInterval(() => {
//       this.setState({count: this.state.count + 1})
//     }, 1000)
//   }

//   componentWillUnmount(){
//     alert('해당 컴포넌트를 보이지 않게 하시겠어요?')
//     clearInterval(this.timerId)
//   }

//   render(){
//     const { count } = this.state
//     return(
//       <div>
//         <h1>카운팅: {count} </h1>
//       </div>
//     )
//   }
// }

/* 9월 12일 useReducer 사용하기 
   reducere : 사용자 액션(인터렉션)의 종류에 따라 현재 state값을 변경하는 함수 
   state: 현재상태, action: 사용자 액션의 종류(객체) */
   
function reducer(state, action){
  switch(action.type){
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}


function Counter(){
  const [ number, dispatch ] = useReducer(reducer, 0) //useReducer(reducer라는 함수, 초기값)

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'}) //dispatch: reducer를 호출해주는 함수
  }

  const onDecrease = () => {
    dispatch({type: 'DECREMENT'})
  }

  return(
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter