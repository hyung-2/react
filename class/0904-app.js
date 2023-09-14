// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Movie from '../src/movie';
import MovieList from './MovieList';

// function App(){
  // return(
  //   // // 일반 태그
  //   // <div className='greeting'>
  //   //   Hello
  //   // </div>

  //   // //리액트 내부적으로 JSX문법을 이런식으로 컴파일함
  //   // React.createElement(
  //   //   'div', //태그
  //   //   {className: 'greeting'}, //속성
  //   //   'Hello' //들어갈 내용
  //   // )

  //   // //최종적으로 객체형식으로 됨 ->리액트 엘리먼트라고 함
  //   // const element = {
  //   //   type: 'div',
  //   //   props: {
  //   //     className: 'greeting',
  //   //     children: 'Hello'
  //   //   }
  // )

  // //함수 사용
  // const name = 'syleemomo'
  // const changeName = (name) => {
  //   return `Hello, ${name}`
  // }
  // const ChildComponent = ({ name }) => { //name: props, 함수같지만 컴포넌트(return값이 엘리먼트,태그이기 때문)
  //   return <div>{name}</div>
  // }
  // return(
  //   <div className='App'>
  // //    <div>{changeName(name)}</div>  
  //     <div><ChildComponent name={name}/></div>  {/* {변수,상수,함수} 할당가능 */}
  //   </div>
  // )

  // // 객체 사용
  // const person = {
  //   name: 'syleemomo',
  //   age: 3
  // }
  // return(
  //   <div className='App'>
  //     <div>{person.name} ({person.age})</div>
  //   </div>
  // )
// }

// class App extends React.Component{
//   state = {
//     fruits: [
//       {name: "딸기", price: "9000원"},
//       {name: "수박", price: "17000원"},
//       {name: "바나나", price: "4700원"}
//     ]
//   }
//   //배열 데이터 -> JSX 엘리먼트(리액트 엘리먼트)로 변환
//   render(){
//     const { fruits } = this.state
//     return(
//       <>
//         <h1>과일 가격표</h1>
//         {fruits.map((fruits, id) => {
//           return (
//             <div key={id}>
//               <h3>{fruits.name}</h3>
//               <h4>{fruits.price}</h4>
//               <h4>---------------</h4>
//             </div>
//           )
//         })}
//       </>
//     )
//   }
// }

// function App(){
  /* 삼항연산자 사용 */
  // const person = {
  //   name: 'syleemomo',
  //   age: 3
  // }
  // return(
  //   <div className='App'>
  //     {/* <div>{person.name ? 'your name is nice!' : 'name dosen`t exist!'} - {person.age}</div> */}
  //     <div>{person.name ? <h1>your name is nice!</h1> : <h1>name dosen`t exist!</h1>} - {person.age}</div>
  //   </div>
  // )

  /* &&, || 사용 */
  // const loading = false
  // return(
  //   <div className='App'>
  //     {/* <div>{loading && <h1>홈페이지</h1>}</div> */}
  //     {/* 로딩이 false면 표현식 전체가 false가 되기 때문에 뒤는 보지 않고 코드가 실행되지 않음(단락평가) */}
  //     <div>{loading || <h1>홈페이지</h1>}</div>
  //     {/* ||는 로딩이 true 일때 뒤의 코드를 안봐도 전체가 true가 되므로 <h1>이 실행되지않고 false가 되면 뒤의 코드를 봐야하기 때문에 <h1>이 실행됨*/}
  //   </div>
  //   // &&, ||는 데이터 검증할때 사용하는데 &&를 주로 사용함
  // )

  /* 조건문 사용 */
  // let loading = false
  // if(loading){
  //   return <h1>로딩화면</h1>
  // }else{
  //   return <h1>홈페이지</h1>
  // }
  // 위 조건문을 삼항연산자를 사용하면 아래와 같다 
  // return(
  //   <>
  //     {loading ? <h1>로딩화면</h1> : <h1>홈페이지</h1>}
  //   </>
  // )
  /*아래와 같이 태그를 변수나 상수에 저장하여 사용가능 
    - 컴파일하여 js객체가 되기때문에 변수나 상수에 저장이 가능하다*/
  // const loadingPage = (
  //   <div>
  //     <h1>로딩화면</h1>
  //   </div>
  // )
  // const homepage = (
  //   <div>
  //     <h1>홈페이지</h1>
  //   </div>
  // )
  // const loading = true
  // if(loading){
  //   return loadingPage
  // }else{
  //   return homepage
  // }

  /* 최상위 요소로 묶기
    - 동등한 위치에 태그가 여러개 있으면 최상위로 하나 묶어줘야한다(div나 프래그먼트(<></>)) 
   * 태그들은 종료태그로 항상 닫아주기 */
  // return( 
  //   <>
  //     <h1>hello world!</h1>
  //     <p>nice to meet you!</p>
  //   </>
  // )

  /* 하나의 모듈에서 여러개의 컴포넌트 사용하기 */
  //모듈 : 서로 관련된 컴포넌트 그룹
  // const MyComponents = { //컴포넌트들을 하나의 그룹으로 묶음
  //   DatePicker : function(props){ //함수 -> 컴포넌트
  //     return <div>Imagine a {props.color} datepicker here.</div>
  //   },
  //   Movie : function(props){ //컴포넌트
  //     return <div>Watch movie {props.title} in the futuer!</div>
  //   },
  //   Fruit: function(props){ //컴포넌트
  //     return <div>{props.name} is healthy food!</div>
  //   }
  // }
  // return(
  //   <div className='App'>
  //     <MyComponents.DatePicker color='블루'/>
  //     <MyComponents.Movie title='아이언맨'/>
  //     <MyComponents.Fruit name='블루베리'/>
  //   </div>
  // )
// }

/* JSX 문법의 사용 예시 */

const loadingPage = <h1>로딩중...</h1>
const homePage = <h1>홈화면</h1>
const pages = ['Home', 'About', 'Detail', 'NotFound']
const pages2 = [
  {pageTitle: 'Home', pageNum: 1, pageDescription: '홈 화면 입니다.'},
  {pageTitle: 'About', pageNum: 2, pageDescription: 'About 화면 입니다.'},
  {pageTitle: 'Detail', pageNum: 3, pageDescription: '상세 정보 화면입니다.'},
  {pageTitle: 'NotFound', pageNum: 4, pageDescription: '404 페이지를 찾을 수 없습니다.'}
]
const PageComponent = ({ pageTitle, pageNum, pageDescription }) => {
  return(
    <div>
      <h1>{pageTitle} (<span>{pageNum}</span>)</h1>
      <p>{pageDescription}</p>
    </div>
  )
}

// class App extends React.Component{
  // state = {
  //   loading: false,
  //   isAuthorized: true,
  //   userId: 'sunrise'
  // }
  // render(){
  //   const { loading, isAuthorized, userId } = this.state
  //   return(
  //     <>
  //       {!loading && isAuthorized && userId === 'sunrise' && 
  //         (
  //           <div>
  //             <h1>홈화면</h1>
  //             <p>여기는 {userId}의 홈페이지입니다.</p>
  //           </div>
  //         )
  //       }
  //     </> 
  //   )
  // }

  /* API서버에서 데이터 가져오기 시뮬레이션 */
  // state = {
  //   loading: true
  // }

  // //첫 화면 로딩의 맨 끝에 실행(render()뒤에 실행 -> 실행후 render()다시 호출)
  // componentDidMount(){
  //   setTimeout(() => {
  //     //로딩 상태 변경
  //     this.setState({loading: false})
  //   } ,1000)
  // }

  // render(){
  //   const { loading } = this.state
  //   if(loading){
  //     return loadingPage
  //   }else{
  //     return homePage
  //   }
  // }

  /* JSX문법을 사용해 버튼 클릭마다 내용 변경하기(페이지 전환)-보통은 리액트라우터사용 */
  // state = {
  //   count: 0
  // }
  // showUI = (cnt) => {
  //   let ui = null
  //   switch(cnt){
  //     case 0:
  //       ui = <h1>홈화면</h1>
  //       break
  //     case 1:
  //       ui = <h1>About</h1>
  //       break
  //     case 2:
  //       ui = <h1>상세 화면</h1>
  //       break
  //     default:
  //       ui = <h1>404 Not Found</h1>
  //   }
  //   return ui
  // }
  // increase = () => {
  //   this.setState({count: this.state.count + 1})
  // }
  // render(){
  //   const { count } = this.state
  //   return(
  //     <>
  //       {this.showUI(count)}
  //       <button onClick={this.increase}>페이지 변경</button>
  //     </>
  //   )
  // }
  // //위 코드는 아래와 같이 사용할수 있다(버튼 누르면 순환됨)
  // state = {
  //   count: 0
  // }
  // increase = () => {
  //     this.setState({count: this.state.count + 1})
  //   }
  // render(){
  //   const { count } = this.state
  //   const selectPage = pages[count % pages.length] //0,1,2,3 반복
  //   return(
  //     <>
  //       <h1>{selectPage}</h1>
  //       <button onClick={this.increase}>페이지 변경</button>
  //     </>
  //   )
  // }
  // //위 코드에서 데이터가 많을때
  // state = {
  //   count: 0
  // }
  // increase = () => {
  //     this.setState({count: this.state.count + 1})
  //   }
  // render(){
  //   const { count } = this.state
  //   const selectPage = pages2[count % pages2.length]
  //   return(
  //     <>
  //       <PageComponent 
  //       pageTitle = {selectPage.pageTitle}
  //       pageNum = {selectPage.pageNum}
  //       pageDescription = {selectPage.pageDescription}/>
  //       <button onClick={this.increase}>페이지 변경</button>
  //     </>
  //   )
  // }
  // //async await 사용 - 랜더링이 계속되어 cpu 자원을 소모해 리액트의 장점이 사라짐
  // state = {
  //   count: 0
  // }
  // increase = async () => {
  //   console.log(this.state.count)
  //   await this.setState({count: this.state.count + 1})
  //   console.log(this.state.count)
  //   await this.setState({count: this.state.count + 1})
  //   console.log(this.state.count)
  //   await this.setState({count: this.state.count + 1})
  //   console.log(this.state.count)
  //   }
  // render(){
  //   console.log('랜더링')
  //   const { count } = this.state
  //   const selectPage = pages2[count % pages2.length]
  //   return(
  //     <>
  //       <PageComponent 
  //       pageTitle = {selectPage.pageTitle}
  //       pageNum = {selectPage.pageNum}
  //       pageDescription = {selectPage.pageDescription}/>
  //       <button onClick={this.increase}>페이지 변경</button>
  //     </>
  //   )
  // }  
// }

/* 나머지 연산자 사용 */
// class App extends React.Component{
  // render(){
  //   return(
  //     <Movie 
  //       id = '1234567890'
  //       title = '해리포터'
  //       language = '영어'
  //       release = '2013년 7월 19일'
  //       length = '27954'
  //       author = '조앤K롤링'
  //       production = '영국'
  //     >

  //     </Movie>
  //   )
  // }

  /* 컴포넌트에 다수의 props가 있는 경우*/
  // state = {
  //   movies: [
  //     {id: "123450", title: 'Harry Potter', language: "korean", release: '2003-02-22', length:"12345", author: "sunrise", production: "sunrise" }, 
  //     {id: "123451", title: 'Indiana Jhones', language: "english", release: '2009-01-09', length:"12345", author: "sunrise", production: "sunrise"}, 
  //     {id: "123452", title: 'Terminator', language: "japanese", release: '2007-04-11', length:"12345", author: "sunrise", production: "sunrise"},
  //     {id: "123453", title: 'Dracula', language: "chinese", release: '2007-04-13', length:"12345", author: "sunrise", production: "sunrise"},
  //     {id: "123454", title: 'Jurassic Park', language: "germany", release: '2007-05-13', length:"12345", author: "sunrise", production: "sunrise"},
  //     {id: "123455", title: 'Iron man', language: "italian", release: '2012-12-18', length:"12345", author: "sunrise", production: "sunrise"},
  //     {id: "123456", title: 'Spider man', language: "russian", release: '2017-03-07', length:"12345", author: "sunrise", production: "sunrise"}
  //   ]
  // }
  // render(){
  //   const { movies } = this.state
  //   return(
  //     <MovieList movies = {movies}/>
  //   )
  // }

  /* 컴포넌트에 자식요소 전달하기  */
  // render(){
  //   return(
  //     <Movie 
  //       id="1234567890"
  //       title="해리포터"
  //       language="english"
  //       release="2013년 7월 19일"
  //       length="27345"
  //       author="조앤K롤링"
  //       production="sunrise"
  //     >
  //       {/* 컴포넌트 컨텐츠 */}
  //       <h3>자식요소 1</h3>
  //       <h3>자식요소 2</h3>
  //       <h3>자식요소 3</h3>
  //     </Movie>
  //   )
  // }
  /* 배열을 반환할수 있다 ->map이 사용가능한 이유 */
  // render(){
  //   return[
  //     <li key='A'>첫번째 아이템</li>,
  //     <li key='B'>두번째 아이템</li>,
  //     <li key='C'>세번째 아이템</li>
  //   ]
  // }
// }

/* 컴포넌트의 자식요소를 함수로 전달하기 -파라미터 값에 따라 다른 화면을 보여줄 경우에 사용 */
// 컴포넌트 생성
// function Repeat(props){
//   let items = []
//   for(let i=0; i<props.numTimes; i++){
//     items.push(props.children(i)) //props.children: 함수 컴포넌트
//   }
//   return <div>{items}</div>
// }

// class App extends React.Component{
//   render(){
//     return(
//       <Repeat numTimes={10}>
//         {/* 컨텐츠: 함수(함수 컴포넌트) 전달 */}
//         {(index) => <div key={index}>{index}번째 아이템입니다.</div>} 
//       </Repeat>
//     )
//   }
// }

//----------------------------------------------------------------------------
/* 연습문제 2 */
// function App(){
//   return(
//     <>
//       <h1> * 유효한 사용자 정보 *</h1>
//       <User/>
//     </>
//   )
// }

/* 연습문제 3 */
// class App extends React.Component {
//   state = {
//     friends: [
//       {name: 'victoria', age: 13, city: 'seoul'},
//       {name: 'sun', age: 34, city: 'busan'},
//       {name: 'johseb', age: 25, city: 'busan'},
//       {name: 'syleemomo', age: 9, city: 'seoul'},
//       {name: 'hannah', age: 41, city: 'daegu'},
//       {name: 'shara', age: 37, city: 'seoul'},
//       {name: 'martin', age: 28, city: 'daegu'},
//       {name: 'gorgia', age: 39, city: 'seoul'},
//       {name: 'nana', age: 24, city: 'busan'},
//       {name: 'dannel', age: 19, city: 'seoul'},
//     ],
//     updatedFriends: null
//   }
//   // 구현하기
//   filterCity = (city) => {
//     console.log(city)

//     this.setState(() => {
//       return {updatedFriends: this.state.friends.map(friend => {
//         if(friend.city === city){
//          return <h3>이름 :{friend.name} 나이: {friend.age} 지역: {friend.city}</h3>
//         }
//       })}
//     })
//   }

//   // 구현하기
//   render(){
//     let { friends, updatedFriends } = this.state 

//     return (
//       <>
//         <button onClick={() => this.filterCity("seoul")}>서울</button>
//         <button onClick={() => this.filterCity("busan")}>부산</button>
//         <button onClick={() => this.filterCity("daegu")}>대구</button>
//         <h1>필터링된 사용자 조회</h1>
//         {updatedFriends == null ? 
//           friends.map(friend => {
//             return <h3>이름 :{friend.name} 나이: {friend.age} 지역: {friend.city}</h3>
//           })
//           : updatedFriends}
//       </>
//     )
//   }
// }

/* 연습문제 4 */
// import './App.css';
// import React, { Component } from 'react'

const signs = [
  [
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
  ]
]

class App extends React.Component {
  state = {
    index: 0,
  }

  // 구현하기
  redraw = () => {
    this.setState({index: this.state.index + 1})

  }
    

  componentDidMount(){
    setInterval(this.redraw, 1000)
  }


  // 구현하기
  render(){
    const sign = signs[this.state.index % signs.length]
    return(
      <>
      <div className='sign'>
        {sign.map(row => {
          const rowRe = row.map(column => {
            return <div className={(column === 0 ? 'cell' : 'cell bright')}></div>
          })
          return rowRe
        })}
      </div>
      </>
      )
  }
}



export default App;
