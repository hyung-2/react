import React, { Component } from "react";
import './Button.css'

// class Button extends Component{
//   render(){
//     const {changeToggle, children, btnclass, searching, totop} = this.props
//     // console.log(this.props)
//     // console.log(this.props.children)
//     // console.log(this.props.state)
//     if(this.props.state === true || this.props.state === false){
//       return <button onClick={changeToggle} className={btnclass}>{children}</button>
//     }else if(this.props.children === '검색'){
//       return <button onClick={searching} className={btnclass}>{children}</button>
//     }else{
//       return <button className={btnclass} onClick={totop}>{children}</button>
//     }

//   }
// }

function Button({changeToggle, children, btnclass, searching, totop, toggle}){
  if(toggle === true || toggle === false){
    return <button onClick={changeToggle} className={btnclass}>{children}</button>
  }else if(children === '검색'){
    return <button onClick={searching} className={btnclass}>{children}</button>
  }else{
    return <button onClick={totop} className={btnclass}>{children}</button>
  }
}

/* 9월 6일 버튼 컴포넌트 */

// function Button ({ children, size, color, width, handleClick, disabled }){ //children:버튼 컴포넌트로 들어오는 컨텐츠
//   return <button className={`button ${size} ${color} ${width} ${disabled ? 'blocked' : ''}`} onClick={handleClick} disabled={disabled}>{children}</button>
//   // 재활용을 할 스타일들을 따로 빼줘서 props로 받아온다
// }


/* 9월 6일 연습문제 1, 2 */
// function Button ({children, btnClick, color, size}){
//   return(
//     <button className={`button ${color} ${size}`} onClick={btnClick}>{children}</button>
//   )
// }





export default Button

//null이나 undefined때 설정할 default값
Button.defaultProps = {
  size: 'medium',
  color: 'tomato',
  disabled: false,
}
