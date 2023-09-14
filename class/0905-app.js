import React, { Component } from 'react';
import './App.css';
// import Counter from './Counter';
// import Movie from './movie';
// import animals from './dummyData'
//import 다음으로오는 이름은 바꿔도 된다
// import CustomInput from './CustomInput'
// import Lotto from './ex';
// import dummyData from './ex'
import Nav from './Nav'
import Product from './Product';
import ProductList from './ProductList'

const colors = ['red', 'blue', 'green', 'orange', 'skyblue', 'pink', 'slategrey']
const fruits = ['apple', 'banana', 'oragne', 'watermelon', 'mango', 'strawberry']

// class App extends Component{
  /* 라이프사이클 메서드 */
  // constructor(props){
  //   console.log('constructor')
  //   super(props)
  //   this.state = {
  //     name: 'syleemomo'
  //   }
  // }

  // changeName = () => {
  //   this.setState({name: '이름 바꾸기'})
  // }

  // componentDidMount(){ //생성될때
  //   console.log('mount')
  //   console.log('---------------')
  // }

  // componentDidUpdate(){ //업데이트 할때
  //   console.log('update')
  // }

  // componentWillUnmount(){ //돔이 화면에서 사라질때 (화면 전환 직전)
  //   console.log('unmount')
  // }

  // render(){
  //   console.log('render')
  //   const { name } = this.state
  //   return(
  //     <div className='App'>
  //       <h1>{name}</h1>
  //       <button onClick={this.changeName}>Change name</button>
  //     </div>
  //   )
  // }


  /* render: class형 컴포넌트에서 무조건 정의되어야함 */
  // state = {
  //   friends: null
  // }

  // setFriends = () => {
  //   this.setState({ friends: [
  //     'sunrise',
  //     'victoria',
  //     'hanna'
  //   ]})
  // }

  // render(){
  //   const { friends } = this.state

  //   if(friends && friends.length !== 0){ //friends가 null이면 화면에 나타나지않음 확실하게 하기위해 friends.length추가
  //     return (
  //       <div>친구목록: {friends.join(', ')}</div>
  //     )
  //   }else{ //null인 경우 안내
  //     return(
  //       <>
  //         <div>친구목록이 존재하지 않습니다.</div>
  //         <button onClick={this.setFriends}>친구목록 갱신</button>
  //       </>
  //     )
  //   }
  // }


  /* constructor: 마운트 되기 전에 초기에 한번만 실행, state초기화해주고 이벤트핸들러 함수에 this값 바인딩 */
  // constructor(props){
  //   super(props) //부모에서 받아오는 props
  //   this.state = {
  //     color: 'red'
  //   }
  //   this.changeColor = this.changeColor.bind(this) //this값은 현재컴포넌트를 가리킴
  // }

  // changeColor(){
  //   //constructor 에 this.changColor... 가 없으면 undefined가 나오고 setState는 에러가난다
  //   //화살표 함수를 사용해 바로 this값 조회 가능(화살표 함수로 작성하는 이유)
  //   console.log(this) 
  //   this.setState({color: 'blue'})
  // }

  // render(){
  //   const { color } = this.state
  //   return(
  //     <>
  //       <div>{color}</div>
  //       <button onClick={this.changeColor}>색상 변경</button>
  //     </>
  //   )
  // }

  /* componenetDidMount: 초기랜더가 된 직후에 자동으로 호출 - DOM을 직접 변경해야 할때 사용 */
  // componentDidMount(){
  //   //랜더에서 호출이 되었으므로 photo-box div를 조회 할 수 있다
  //   const photoBox = document.querySelector('.photo-box')
  //   photoBox.innerHTML = '포토박스'
  // }

  // render(){
  //   return(
  //     <>
  //       <div className='photo-box'>
  //         컨텐츠 없음
  //       </div>
  //     </>
  //   )
  // }


  /* 1초마다 배경색이 바뀌는 */
  // state = {
  //   colorIndex: 0
  // }

  // changeColor = () => {
  //   this.setState({ colorIndex: this.state.colorIndex + 1})
  // }

  // //this값이 있어야만 다른데서도 this값 조회 가능
  // componentDidMount(){ // 타이머 설정 (구독 : subscription)
  //   this.timerId = setInterval(this.changeColor,1000)
  // }

  // componentWillUnmount(){ //타이머 해제 (구독해제 : unsubscription)
  //   clearInterval(this.timerId)
  // }

  // render(){
  //   const { colorIndex } = this.state
  //   const color = colors[colorIndex % colors.length]

  //   return(
  //     <div className={`color-box ${color}`}>
  //       {color}
  //     </div>
  //   )
  // }


  /* componentDidUpdate: 이벤트핸들러 함수에 의해 state가 업데이트 될때마다 갱신 직후 호출 */
  // state = {
  //   cnt: 0
  // }

  // increase = () => {
  //   this.setState({cnt: this.state.cnt + 1})
  // }

  // componentDidUpdate(prevProps, prevState){ //(이전의 부모에게서 받은 값,상태가 바뀌기 직전의 값)- 직전의 값이 필요할때 작업 가능
  //   console.log('카운트 업데이트')
  //   console.log('직전 카운트 값:', prevState)

  //   this.increase() //state값 변경 - 무한루프됨 - didupdate 안에서 state값 함부로 변경 x
  // }

  // render(){
  //   const { cnt } = this.state

  //   return(
  //     <div>
  //       <div>{cnt}</div>
  //       <button onClick={this.increase}>카운트</button>
  //     </div>
  //   )
  // }


  /* componentDidUpdate에서 state값 변경해보기 */
  // state = {
  //   fruit: fruits[0]
  // }

  // changeFruitOrNot = () => { //랜덤하게 fruits배열에서 선택
  //   this.setState({fruit: fruits[Math.floor(Math.random()*fruits.length)]})
  // }

  // componentDidUpdate(prevProps, prevState){
  //   if(this.state.fruit !== prevState.fruit){
  //     console.log('과일 변경')
  //     console.log('직전에 선택한 과일 :', prevState.fruit)
  //   }else{
  //     alert('현재 선택된 과일은 이전과 동일함')
  //     this.changeFruitOrNot() //한번 더 랜덤으로 과일 선택
  //   }
  // }

  // render(){
  //   const { fruit } = this.state
  //   return(
  //     <div className='center'>
  //       <div>{fruit}</div>
  //       <button onClick={this.changeFruitOrNot}>과일 변경하기</button>
  //     </div>
  //   )
  // }


  /* componentWillUnmount */
  // state = {
  //   toggle: true
  // }

  // changeToggle = () => {
  //   this.setState({toggle: !this.state.toggle})
  // }

  // render(){
  //   const { toggle } = this.state
  //   return(
  //     <div>
  //       {toggle ? <Counter/> : <h1>컨텐츠 없음</h1>}
  //       <br/>
  //       <button onClick={this.changeToggle}> 컴포넌트 보이기/숨기기 </button>
  //     </div>
  //   )
  // }


  /* 라이프사이클 활용 - 무비 리스트 보여주기 */
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     loading: true, //서버에서 가져오기 전 로딩화면 보여주기
  //     movies: [] //화면에 보여줄 영화 리스트
  //   }
  // }

  // //서버에서 데이터 가져오는 시점 -> 화면이 맨 처음 로딩된 직후
  // // componentDidMount() 에서 조회
  // componentDidMount(){ //화면에 모든 html태그들이 랜더링된 이후
  //   fetch('https://yts.mx/api/v2/list_movies.json?limit=50')
  //   .then(res =>res.json())
  //   .then(result => {
  //     const {data: {movies}} = result //result에서 data를 꺼내고 movies를 꺼냄(result.data.movies)
  //     console.log(movies)
  //     this.setState({loading: false, movies}) //state이름과 변수이름이 같아서 movies: movies를 movies로 사용가능
  //   })
  // }

  // render(){
  //   const { loading, movies } = this.state

  //   const style = {
  //     display: 'flex',
  //     flexWrap: 'wrap',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     width: '60%',
  //     margin: '100px auto',
  //     textAlign: 'center'
  //   }

  //   const loadingStyle = {
  //     position: 'absolute', 
  //     left: '50%', 
  //     top:'50%', 
  //     transform: 'translate(-50%, -50%)', 
  //     fontSize: '2rem'
  //   }

  //   if(loading){
  //     return(
  //       <div style={loadingStyle}>
  //         <h1>로딩중...</h1>
  //       </div>
  //     )
  //   }else{
  //     return(
  //       <div style={style}>
  //         {movies.length !== 0 && movies.map(movie => {
  //           return (
  //             <Movie
  //               key={movie.id}
  //               title={movie.title}
  //               genres={movie.genres}
  //               cover={movie.medium_cover_image}
  //               year={movie.year}
  //               rating={movie.rating}
  //               summary={movie.summary}
  //             >

  //             </Movie>
  //           )
  //         })}
  //       </div>
  //     )
  //   }
  // }

  /* 1초마다 자동으로 숫자 카운팅 - 카운트 될때마다 사진 바꾸기 */
  // state = {
  //   count: 0
  // }

  // increaseCount = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  // componentDidMount(){
  //   this.countId = setInterval(this.increaseCount, 1000)
  // }

  // componentWillUnmount(){
  //   clearInterval(this.countId)
  // }

  // render(){
  //   const { count } = this.state
  //   const animal = animals[count % animals.length]
  //   // console.log(animal)
  //   return(
  //     <div className='App'>
  //       <h1>이미지 갤러리</h1>
  //       {/* <h2>{count}</h2> */}
  //       <br/>
  //       <br/>
  //       <img src={animal.src} alt={animal.title}></img>
  //       <h2>{animal.title}</h2>
  //     </div>
  //   )
  // }

  /* 요소 참조하기 */
  // render(){
  //   return(
  //     <div className='App'>
  //       <CustomInput/>
  //     </div>
  //   )
  // }

// }



class App extends Component{
  /* 연습문제 2 - return 안에 <Lotto/>만 입력 */
  /* 연습문제 3 */
  // state = {
  //   count: 0
  // }

  // increaseCount = () => {
  //   this.setState({count: this.state.count + 1})
  // }

  // componentDidMount(){
  //   setInterval(this.increaseCount,1000)
  // }
  
  // render(){
  //   const { count } = this.state
  //   const word = dummyData[Math.floor(Math.random() *dummyData.length )]
  //   console.log(word)
  //   return(
  //     <div className='App'>
  //       <h1>영어 단어장</h1>
  //       <div>
  //         <h2>{word.word}</h2>
  //         <h2>{word.meaning}</h2>
  //       </div>
  //     </div>
  //   )
  // }

  /* 연습문제 4 */
  state = {
    toggle : false,
    products: [],
    reProducts: []
  }

  changeToggle = () => {
    this.setState({toggle: true})
  }
  noChangeToggle = () => {
    this.setState({toggle: false})
  }

  componentDidMount(){
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(response => response.json())
    .then(result => {
      console.log(result)
      this.setState({products: result})
    })
  }

  render(){
    const { toggle, products, reProducts } = this.state
    console.log(products)
    console.log(toggle)
    if(toggle===true){
      return(
        <div className='App'>
          <Nav state={toggle} changeToggle={this.changeToggle} noChangeToggle={this.noChangeToggle}/>
          {/* products sort만 하면 끝 */}
          <ProductList products={products}/>
        </div>
      )
    }else{
      return(
        <div className='App'>
          악
          <Nav state={toggle} changeToggle={this.changeToggle} noChangeToggle={this.noChangeToggle}/>
          <ProductList products={products}/>
        </div>
      )
    }
  }
}

export default App;

