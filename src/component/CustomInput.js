import React, { Component } from "react";

/* 요소 참조하기 */
class CustomInput extends Component{
  constructor(props){
    super(props)
    this.textInput = React.createRef() // ref 생성하기 (변수 생성처럼)
  }

  focusInput = () => {
    console.log(this.textInput.current) //우리가 설정한 ref 가리킴
    console.log(this.textInput.current.value) //우리가 설정한 ref 가리킴
    this.textInput.current.focus() //ref 사용
  } 

  render(){
    return(
      <>
        <input type='text' ref={this.textInput}></input>  {/* ref 설정 */}
        <button onClick={this.focusInput}>포커스</button>
      </>
    )
  }
}

//함수형ver
// function CustomInput(props){
//   const textInput = useRef(null) //이부분이 class형과 다르다
//   const focusInput = () => {
//     console.log(textInput.current)
//     textInput.current.focus()
//   }
//   return(
//     <>
//       <input type='text' ref={textInput}></input>  {/* ref 설정 */}
//       <button onClick={focusInput}>포커스</button>
//     </>
//   )
// }

export default CustomInput