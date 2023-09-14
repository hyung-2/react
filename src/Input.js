import React from "react";
import './Input.css'

/* 9월 6일 - 연습문제 4 */
// function Input({size, color, handleChange, disabled, label, placeholder}){
//   const inputs = document.querySelectorAll('input')
//   inputs.forEach(input => {
//     console.log(input)
//     console.log(input.placeholder)
//   })
//   const style = {
//     placeholder: {color}
//   }
//   return(
//     <div className="inputCon">
//       <label className={`label ${color}`}>{label}</label>
//       <input className={`input ${size} ${color} ${disabled}`} disabled={disabled} onChange={handleChange} placeholder={placeholder}></input>
//     </div>
//   )
// }

/* 9월 6일 - 연습문제 5 */
class Input extends React.Component{
  render(){
    const { handleChange } = this.props
    return(
      <>
        <input className="searchInput" type='text' onChange={handleChange}></input>
      </>
    )
  }
}

export default Input