import React, { Component } from 'react';
import './App.css';
import Button from './Button';

/* 간단한 체크박스 기능 구현 */

//서버에서 들어온 메뉴 데이터
// const foods = ['짜장면', '짬뽕', '탕수육', '양장피']

// class App extends Component{
//   state = {
//     selectedItems: [],
//   }

//   selectItem = (e) => {
//     // console.log(e.target)
//     console.log(e.target.value, e.target.checked)

//     const { selectedItems } = this.state
//     //setState: state값이 배열, 객체인 경우 새로운 배열을 만들어주는 이유 :
//     //리액트는 state가 변경되었음을 인식할때 배열이나 객체의 메모리 주소값 확인
//     if(!selectedItems.includes(e.target.value)){ // = if(e.target.checked){ //체크하면 true가 되니까 이렇게도 쓸수있따
//       this.setState({selectedItems: [...selectedItems, e.target.value]})
//       //원래 있던배열 끝부분에 현재 선택한값 추가
//     }else{//사용자가 선택한 음식이 이미 배열에 존재하는경우
//       this.setState({selectedItems: selectedItems.filter(item => item !== e.target.value)})
//       //현재 선택하지 않은값들을 걸러준다
//     }
//   }
//   render(){
//     const { selectedItems } = this.state
//     return(
//       <div className='App'>
//         {foods.length !==0 && foods.map((food, id) => 
//         <div key={id}>
//           <input type='checkbox' onChange={this.selectItem} value={food}/><span className={selectedItems.includes(food) ? 'active' : '' }>{food}</span> 
//         </div>
//         )}
        
//         {/* <input type='checkbox' onChange={this.selectItem} value='짜장면'/><span className={selectedItems.includes('짜장면') ? 'active' : '' }>짜장면</span>
//         <input type='checkbox' onChange={this.selectItem} value='짬뽕'/><span className={selectedItems.includes('짬뽕') ? 'active' : '' }>짬뽕</span>
//         <input type='checkbox' onChange={this.selectItem} value='탕수육'/><span className={selectedItems.includes('탕수육') ? 'active' : '' }>탕수육</span> */}
        
//         <h2>사용자가 선택한 음식</h2>
//         <h3>{selectedItems.length !== 0 ? selectedItems.join(' ') : '먹고 싶은 음식을 선택하세요'}</h3>
//       </div>
//     )
//   }
// }

/* 체크박스 대신 radio 버튼 */
// class App extends Component{
//   state = {
//     selectedValue: ''
//   }

//   selectItem = (e) => {
//     console.log(e.target.value, e.target.checked)

//     this.setState({selectedValue: e.target.value})
//   }

//   render(){
//     const { selectedValue } = this.state
//     return(
//       <div className='App'>
//         {foods.length !==0 && foods.map((food, id) => 
//         <div key={id}>
//           <input type='radio' onChange={this.selectItem} value={food} checked={selectedValue === food}/><span style={{background: `${selectedValue === food ? 'springgreen' : ''}`}}>{food}</span>
//         </div>
//         )}
//         {/* <input type='radio' onChange={this.selectItem} value='짜장면' checked={selectedValue === '짜장면' }/><span style={{background: `${selectedValue === '짜장면' ? 'springgreen' : ''}`}}>짜장면</span>
//         <input type='radio' onChange={this.selectItem} value='짬뽕' checked={selectedValue === '짬뽕'}/><span style={{background: `${selectedValue === '짬뽕' ? 'springgreen' : ''}`}}>짬뽕</span>
//         <input type='radio' onChange={this.selectItem} value='탕수육' checked={selectedValue === '탕수육'}/><span style={{background: `${selectedValue === '탕수육' ? 'springgreen' : ''}`}}>탕수육</span> */}
//         {/* checked가 있어야 다른 radio클릭시 원래 클릭되어있던것 해제 */}
//         <h2>사용자가 선택한 음식</h2>
//         <h3>{selectedValue}</h3>
//       </div>
//     )
//   }
// }

/* 파일 업로드 처리하기 */
// class App extends Component{
//   constructor(props){ //인풋을 숨기고 버튼클릭시 인풋창이 실행되게하기 위한 ref설정을 하기 위해 constructor 설정
//     super(props)
//     this.state = {
//       fileName: '',
//       imgSrc: ''
//     }
//     this.fileInput = React.createRef() //ref 생성(요소 참조를 위한 변수 만듬 - input 직접 접근하고 제어하기 위함)
//   }

//   isValid = (type) => {
//     return type === 'image'
//   }

//   handleChange = (e) => {
//     const file = e.target.files[0] //사용자가 업로드한 파일의 정보가 배열의 형태 - 1개니까 0번째 
//     const imgSrc = URL.createObjectURL(file) //blob형태의 file 이미지 경로 생성
//     console.log(file.type)

//     if(this.isValid(file.type.split('/')[0])){ // 업로드한 파일이 이미지인 경우
//     // if(file.type.split('/')[0] === 'image'){
//       this.setState({fileName: file.name, imgSrc})
//     }else{ // 업로드한 파일이 이미지가 아닌 경우
//       this.setState({fileName: '이 파일은 이미지가 아닙니다.', imgSrc: ''})
//     }
//   }
//   openFileWindow = () => {
//     console.log(this.fileInput.current) //해당 element에 직접접근(current)
//     this.fileInput.current.click()
//   }

//   render(){
//     const { fileName, imgSrc } = this.state
//     // return(
//     //   <div className='App'>
//     //     <h1>{fileName}</h1>
//     //     {imgSrc !== '' && <img src={imgSrc} alt='preview-img' width='300px' height='400px'></img>}
//     //     <input className='Upload' type='file' accept='image/*' ref={this.fileInput} onChange={this.handleChange}></input> 
//     //     <Button handleClick={this.openFileWindow}>업로드</Button>
//     //   </div>
//     // )

//     //아래는 ref없이 label를 이용한 input연동
//     return(
//       <div className='App'>
//         <h1>{fileName}</h1>
//         {imgSrc !== '' && <img src={imgSrc} alt='preview-img' width='300px' height='400px'></img>}
//         <input id='upload' className='Upload' type='file' accept='image/*' onChange={this.handleChange}></input> 
//         <Button>
//           <label for='upload'>업로드</label>
//         </Button>
//       </div>
//     )
//   }
// }

/* 페이지 스크롤링하기 */
// import ScrollComponent from './ScrollComponent'

// class App extends Component{
//   render(){
//     return(
//       <div className='App'>
//         <ScrollComponent></ScrollComponent>
//       </div>
//     )
//   }
// }

/* 무한 스크롤 활용 - 서버에서 이미지 가져오기 */
// import Button from './Button';
// import Nav from './Nav'
// import ProductList from './ProductList'
// import Modal from './Modal';

// class App extends Component{
//   pageNum = 1 //멤버 변수(페이지번호 저장),
//   // state값과의 차이점 -> 
//   // state: 변경되는 값이고 화면에 보여지는 값, 멤버변수: 변경은 되지만 화면에 보여질 필요가 없는 값
//   state = {
//     keyword: '',
//     photos: []
//   }

//   handleChange = (e) => {
//     this.setState({keyword: e.target.value}) //사용자가 입력한 텍스트로 keyword 상태 설정
//   }

//   //서버에서 이미지 가져오기
//   getPhotos = async () => {
//     const data = await fetch(`https://api.unsplash.com/search/photos?page=${this.pageNum}&query=${this.state.keyword}&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&per_page=20`)
//     const dataJson = await data.json()
//     console.log(dataJson)
//     return dataJson.results //이미지 배열
//   }

//   searchPhotos = async (e) => {
//     e.preventDefault() //사용자가 입력한 값이 사라지지 않게 input enter시 새로고침 방지
//     const photos = await this.getPhotos()
//     this.setState({photos}) //불러온 데이터 state값에 담기
//   }

//   handleScroll = async () => { //스크롤이벤트
//     const photoContainer = document.querySelector('.App-photo-container')
//     if(photoContainer.scrollTop + photoContainer.clientHeight === photoContainer.scrollHeight){
//       console.log('바닥')
//       this.pageNum ++ //다음페이지 조회하기
//       const photos = await this.getPhotos() //다음 페이지 사진 목록 가져오기
//       this.setState({photos: [...this.state.photos, ...photos]}) //기존 photos배열에 새로 불러온 데이터 추가
//     }
//   }

//   componentDidMount(){ //컴포넌트 마운트되고 스크롤이벤트 등록
//     document.querySelector('.App-photo-container').addEventListener('scroll', this.handleScroll)
//   }

//   componentWillUnmount(){ //스크롤이벤트 해제
//     document.querySelector('.App-photo-container').removeEventListener('scroll', this.handleScroll)
//   }

//   render(){
//     const { keyword, photos } = this.state
//     console.log(photos)
//     // console.log(process.env.REACT_APP_UNSPLASH_API_KEY)
//     return(
//       <div className='App'>
//         <form className='App-search-container'>
//           <input type='text' value={keyword} placeholder='검색어 입력' onChange={this.handleChange}/>
//           <button type='submit' onClick={this.searchPhotos}>검색</button>
//         </form>
//         <div className='App-photo-container'>
//           {photos.length === 0 ? 
//           <div>원하시는 사진을 <br/> 검색창에서 찾아보세요!</div>  
//           : photos.map(photo => 
//           <img key={photo.id} className='App-photo-item' src={photo.urls.small} alt={photo.alt_description}/>)
//           }
//         </div>
//       </div>
//     )
//   }
// }


/* 연습문제 */
import Button from './Button'
import ProductList from './ProductList'
import Modal from './Modal'
import Nav from './Nav'

const menu = [
  {'HOME' : ['홈', '홈홈', '홈홈홈']},
  {'ABOUT' : ['회사소개', '제품소개', '아몰라']},
  {'CONNECT' : ['연락처1', '연락처2', '연락처3', '연락처4']},
]

class App extends Component{
  state = {
    toggle : false,
    products: [],
    keyword: '',
    close: true,
  }

  changeToggle = () => {
    this.setState({toggle: !this.state.toggle})

  }

  searching = (keyword, e) => {
    this.setState({keyword})
  }
  
  handleScroll = () => {
    const nav = document.querySelector('nav')
    window.pageYOffset > 100 ? nav.classList.add('shadow') : nav.classList.remove('shadow')
  }

  totop = () => {
    return window.scrollTo({top:0, behavior:'smooth'})
  }

  clickMenu = (e) => {
    const menus = document.querySelectorAll('.menu')
    menus.forEach(menu => {
      if(menu.className.includes('menucolor') !== e.target){
        return(
          menu.nextElementSibling.classList.remove('dropflex'),
          menu.classList.remove('menucolor')
        )
      }
    })
    if(e.target.className === 'menu'){
      return(
        e.target.nextElementSibling.classList.add('dropflex'),
        e.target.classList.add('menucolor')
      )
    }else{
      return(
        e.target.nextElementSibling.classList.remove('dropflex'),
        e.target.classList.remove('menucolor')
      )
    }
  }

  clicked = (e) => {
    console.log(e.target)
    if(e.target.innerText !== 'HOME' && e.target.innerText !== 'ABOUT' && e.target.innerText !== 'CONNECT'){
      const menus = document.querySelectorAll('.menu')
      menus.forEach(menu => {
        return(
          menu.nextElementSibling.classList.remove('dropflex'),
          menu.classList.remove('menucolor')
        )

      })
    }

    
    
  }

  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      const origin = [...result]
      // result.sort(function(a,b){return a.price - b.price})
      this.setState({products: origin, close:false})
    })
  }

  componentDidUpdate(){
    return this.state.close === false ? setTimeout(() => {this.setState({close: true})},2000) : ''
  }

  render(){
    const { toggle, products, keyword, close} = this.state
    const sortProduct = [...products]
    const copyProducts = [...products]
    const filtered = copyProducts.filter((pro) => {

    const lowerName = pro.name.toLowerCase()
    const upperName = pro.name.toUpperCase()
    return lowerName.includes(keyword) || upperName.includes(keyword)
    })
    // console.log(filtered)
    // console.log(products)
    // console.log(keyword)
      return(
        <div className='App' onClick={this.clicked}>
          <Nav state={toggle} searching={this.searching} changeToggle={this.changeToggle} items={menu} clickMenu={this.clickMenu}/>
          {keyword === '' ? 
          // 검색어가 없는경우
          toggle ? 
          <ProductList products={sortProduct.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={products}/>  
          :
          // 검색어가 있는경우
          toggle ? 
          <ProductList products={filtered.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={filtered}/>

          }
          <Modal close={close}>데이터 로드 완료!</Modal>
          <Button btnclass='totop' totop={this.totop}>To top</Button>
        </div>
      )

  }
}


export default App;