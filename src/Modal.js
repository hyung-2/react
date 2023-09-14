import React from "react";
import './Modal.css'

/* 9월 6일 - 모달 컴포넌트 */
// function Modal({ open, children }){
//   return <div className={`Modal ${open ? 'open' : 'close'}`}>{children}</div>
// }

/* 9월 6일 - 연습문제2 */
function Modal({close, children, }){
  // console.log(close)
  return <div className={`Modal ${close ? 'close' : 'open'}`}>{children}</div>
}

export default Modal

Modal.defaultProps = {
  open: false
}