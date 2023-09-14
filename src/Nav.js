import React, { Component, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import './Nav.css';
import Dropdown from './Dropdown';
/* 9월 5일,6일 연습문제5 */
// class Nav extends Component{
//   state = {
//     keyword: ''
//   }
//   handleChange = (e) => {
//     // console.log(e.target.value)
//     console.log(e.key)
//     this.setState({keyword: e.target.value})
//   }

//   render(){
//     const { keyword } = this.state
//     const { changeToggle, searching, items, id, clickMenu } = this.props
//     // console.log(searchWord)
//     return(
//       <nav>
//         <div className="dropdown" id={id}><Dropdown items={items} clickMenu={(e)=>clickMenu(e)}></Dropdown></div>
//         <div className="btns">
//           <Input handleChange={this.handleChange}></Input>
//           <Button btnclass='searchbtn' searching={(e)=>searching(keyword, e)}>검색</Button>
//           <Button state={this.props.state} changeToggle={changeToggle} btnclass='pricebtn'>
//             {this.props.state === false ? 'Price' : 'Product'}
//           </Button>
//           {/* <Button changeToggle={this.props.state === false ? {changeToggle} : {noch} }></Button> */}

//         </div>
//       </nav>
//     )
//   }
// }


function Nav({ changeToggle, searching, items, id, clickMenu, toggle }){
  const [keyword, setKeyword] = useState('')
  const handleChange = (e) => {
    setKeyword(e.target.valeu)
  }
  return(
    <nav>
      <div className="dropdown" id={id}>
        <Dropdown items={items}></Dropdown>
      </div>
      <div className="btns">
        <Input handleChange={handleChange}></Input>
        <Button btnclass='searchbtn' searching={(e)=>searching(keyword, e)}>검색</Button>
        <Button toggle={toggle} changeToggle={changeToggle} btnclass='pricebtn'>
          {toggle === false ? 'Price' : 'Product'}
        </Button>
      </div>
    </nav>
  )

}

/* 9월 6일 연습문제1 */
// function Nav(){
//   const navigate = (url) => {
//     window.location.href = url
//   }
//   return(
//     <div className="nav-container" style={style} >
//       <Button size='small' btnClick={() => navigate('https://www.google.com')}>구글</Button>
//       <Button size='small' btnClick={() => navigate('https://www.naver.com')}>네이버</Button>
//       {/* 함수에 인자값이 있으면 한번 랩핑해줘야 바로 이동하지 않음 {() => 함수(인자)} */}
//       <Button size='small' btnClick={() => navigate('https://sssssqew.github.io/dictionary/')}>사전 검색 서비스</Button>
//     </div>
//   )
// }

export default Nav