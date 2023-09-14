import React, { Component } from 'react';
import './App.css';
// import './App.scss';
// import Button from './Button';
// import Modal from './Modal';
// import Card from './Card';
// import Input from './Input'
import Nav from './Nav'
import ProductList from './ProductList'

/* 버튼 컴포넌트 */
// function App(){
  // const handleClick = () => {alert('버튼을 클릭하셨습니다.')}
  
  // return(
  //   <div className='App'>
  //     <Button size="small" color="blue" handleClick={handleClick} disabled={true}>Add Todo</Button>
  //     <Button size="small" handleClick={handleClick}>Add Todo</Button>
  //     <Button size="medium" color="green" width='fullWidth'>
  //       <img src='http://simpleicon.com/wp-content/uploads/rocket.png' width='30px' height='30px'></img>
  //       Add Todo
  //       </Button>
  //     <Button size="large" color='grey'>Add Todo</Button>
  //   </div>
  // )
// }

/* 모달 컴포넌트 */
// class App extends Component{
//   state = {
//     open: false
//   }

//   openModal = () => {
//     this.setState({open: true})
//   }
//   closeModal = () => {
//     this.clearInputs()
//     this.setState({open: false})
//   }
//   // 인풋 내용 초기화
//   clearInputs = () => {
//     const inputs = document.querySelectorAll('.Modal-body input')
//     for(let input of inputs){
//       input.value = ''
//     }
//   }
//   componentDidUpdate(){
//     if(this.state.open){ //모달창이 열려있으면
//       const firstInput = document.querySelector('.Modal-body input') // = document.querySelectorAll('.Modal-body input')[0]
//       firstInput.focus()
//     }
//   }
//   handleKeyUp = (e) => {
//     console.log(e.key)
//     if(e.key === 'Enter'){
//       this.closeModal()
//     }
//   }

//   // css 모듈 : 클래스명이 같더라도 서로 다른 해쉬값(영문자/숫자)을 생성하므로 겹치지 않음
//   // 아니면 컴포넌트이름을 -으로 붙혀서 사용
//   render(){
//     const { open } =this.state
//     return(
//       <div className='App'>
//         <Button handleClick={this.openModal}>할일 추가하기</Button>
//         <Modal open={open}>
//           {/* 파일이 하나로 합쳐지기때문에 App.css나 Modal.css에 써도 상관은 없다 - Modal에 넣는게 재활용이 용이할듯? */}
//           <div className='Modal-header'>할일을 추가하시겠습니까?</div>
//           <div className='Modal-body'>
//             <label>할일 제목: <input type='text'/></label>
//             <br/>
//             <label>할일 설명: <input type='text' onKeyUp={this.handleKeyUp}/></label>
//           </div>
//           <div className='Modal-footer'>
//             <Button size='small'>추가</Button>
//             <Button size='small' color='green' handleClick={this.closeModal}>닫기</Button>
//           </div>
//         </Modal>
//       </div>
//     )  
//   }
// }

/* SASS를 활용한 컴포넌트 */
// function App(){
//   return(
//     <div className='background'>
//       <h1>sass 스타일링</h1>
//     </div>
//   )
// }

/* 다크모드 */
// class App extends Component{
//   state = {
//     toggle: true
//   }

//   toggleScreenMode = () => {
//     this.setState({toggle: !this.state.toggle})
//   }
//   render(){
//     const { toggle } = this.state
//     return(
//       <div className={`normal ${toggle ? '' : 'dark'}`}>
//         <h1>Change Screen Mode</h1>
//         <button type='button' onClick={this.toggleScreenMode}>{toggle ? '다크모드' : '일반모드'}</button>
//       </div>
//     )
//   }
// }

/* 연습문제 1 */
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <Nav></Nav>
//       </div>
//     )
//   }
// }

/* 연습문제 2 */
// class App extends Component{
//   state = {
//     close: false,
//     done: false
//   }
//   closeAndDelete = () => {
//     this.setState({close: true, done: true})
//   }

//   close = () => {
//     this.setState({close: true})
//   }

//   render(){
//     const { close, done } = this.state
//     return(
//       <div className='App'>
//         <Button color='blue'>할일 지우기</Button>
//         <Modal close={close}>
//           <div className='Modal-header'>You want to remove this todo?</div>
//           <div className='Modal-body'>할일 지울거냐고</div>
//           <div className='Modal-footer'>
//             <Button size='small' btnClick={this.closeAndDelete}>삭제하기</Button>
//             <Button size='small' btnClick={this.close}>닫기</Button>
//           </div>
//         </Modal>
//         {close && done ? <h1>removed successfully!</h1> : ''}
//       </div>
//     )
//   }
// }

/* 연습문제 3 */
// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <Card></Card>
//       </div>
//     )
//   }
// }

/* 연습문제 4 */
// function App(){
//   const handleChange = () => console.log('Typing something...')
//   return(
//     <div className='App'>
//       <Input size="small" color="blue" handleChange={handleChange} disabled={true} label="Add Todo" placeholder="Type todo to add ..."/>
//       <Input size="medium" color="tomato" label="입력창" placeholder="뭐든지 입력하세요 !"/>
//       <Input size="large" color="grey" label="Remove Todo" placeholder="Type todo to remove ..."/>
//     </div>
//   )
// }

/* 연습문제 5 --- 실패편*/
// class App extends Component{
//   state = {
//     toggle : false,
//     products: [],
//     reProducts: [],
//     searchproducts: []
//   }

//   changeToggle = () => {
//     this.setState({toggle: !this.state.toggle})

//   }

//   searching = (keyword, e) => {
//     //filter를 해도 원본이 남아잇게끔 ㄱ
//     const fiteredProducts = this.state.toggle ? [...this.state.reProducts] : [...this.state.products]
//     const filtered = fiteredProducts.filter((pro) => {
//       // console.log(e)
//       const lowerName = pro.name.toLowerCase()
//       const upperName = pro.name.toUpperCase()
//       // console.log(lowerName, upperName)
//       // console.log(pro)
//       return lowerName.includes(keyword) || upperName.includes(keyword)
//     })
//       // return pro.name.includes(keyword) ? this.setState({searchproducts: pro}) : pro
//     console.log(filtered)
//     // this.setState({searchproducts: filtered})
//     keyword !== ''? this.setState({products: filtered, reProducts: filtered}) : this.setState({product: this.state.products, reProducts: this.state.reProducts})
//   }

//   componentDidMount(){
//     fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
//     .then(response => response.json())
//     .then(result => {
//       console.log(result)
//       const origin = [...result]
//       result.sort(function(a,b){return a.price - b.price})
//       this.setState({products: origin, reProducts: result})
//     })
//   }

//   render(){
//     const { toggle, products, reProducts, searchproducts } = this.state
//     console.log(products)
//     console.log(reProducts)
//     console.log(searchproducts)
//     console.log(toggle)
//       return(
//         <div className='App'>
//           <Nav state={toggle} searching={this.searching} changeToggle={this.changeToggle}/>
//           {toggle ? <ProductList products={reProducts}/> : <ProductList products={products}/>}
//           {/* <ProductList products={products}/> */}
//         </div>
//       )

//   }
// }

/* 연습문제5 --- 성공편 */

import Button from './Button';
import Nav from './Nav'
import ProductList from './ProductList'

class App extends Component{
  state = {
    toggle : false,
    products: [],
    keyword: ''
  }

  changeToggle = () => {
    this.setState({toggle: !this.state.toggle})

  }

  searching = (keyword, e) => {
    this.setState({keyword})
  }

  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      const origin = [...result]
      result.sort(function(a,b){return a.price - b.price})
      this.setState({products: origin})
    })
  }

  render(){
    const { toggle, products, keyword} = this.state
    const sortProduct = [...products]

    const copyProducts = [...products]
    const filtered = copyProducts.filter((pro) => {

    const lowerName = pro.name.toLowerCase()
    const upperName = pro.name.toUpperCase()

    return lowerName.includes(keyword) || upperName.includes(keyword)
    })
    console.log(filtered)

    console.log(products)
    console.log(keyword)
      return(
        <div className='App'>
          <Nav state={toggle} searching={this.searching} changeToggle={this.changeToggle}/>
          {keyword === '' ? 
          // 검색어가 없는경우
          toggle ? 
          <ProductList products={sortProduct.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={products}/>  
          :
          // 검색어가 있는경우
          toggle ? 
          <ProductList products={filtered.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={filtered}/>

          }
        </div>
      )

  }
}

export default App;

