import React from "react";
// 8월 31일

// //연습문제 1

// function Friends(props){
//   console.log(props)
//   return(
//     <>
//       <h3>{props.name}</h3>
//       <h4>{props.age}</h4>
//       <h4>{props.city}</h4>
//       -----------------------
//     </>
//   )
// }

// export default Friends



// //연습문제 2

// class Person extends React.Component{
//   state = {
//     name: 'sunrise',
//     age: 23,
//     friends: ['victoria', 'daniel', 'hanna']
//   }

//   displayInfo = (state) => {
//     console.log(this.state)
//     alert(`
//       "신상정보"
//       -------------------
//       이름 : ${this.state.name}
//       나이 : ${this.state.age}
//       친구 : ${this.state.friends}

//     `)
//   }

//   render(){
//     return(
//       <>
//         <button onClick={this.displayInfo}>신상정보 확인하기</button>
//       </>
//     )
//   }
// }

// export default Person



// //연습문제 3

// class Book extends React.Component{
//  state = {
//   title: '해리포터',
//   author: '조앤K롤링',
//   summary: '해리포터가 마법사로 성장해나가는 과정을 그린 이야기',
//   genre: '판타지 소설',
//   release: '2003년 9월 4일',
//   ISBN: '1234567890'
//  }

//  render(){
//   const { title, author, summary, genre, release, ISBN} = this.state
//   return(
//     <>
//       <h2>도서 정보</h2>
//       <h3>제목: {title}</h3>
//       <h3>저자: {author}</h3>
//       <h3>줄거리: {summary}</h3>
//       <h3>장르: {genre}</h3>
//       <h3>출판일: {release}</h3>
//       <h3>ISBN: {ISBN}</h3>
//     </>
//   )
//  }
// }

// export default Book

// //연습문제 4

// function Animal(props){
//   console.log(props)
//   return(
//     <>
//       <h1>동물 정보</h1>
//       <h3>종류 - {props.type}</h3>
//       <h3>이름 - {props.name}</h3>
//       <h3>크기 - {props.size}</h3>
//       <h3>소리 - {props.sound}</h3>
//       <h3>생김새 - {props.appearence}</h3>
//     </>
//   )
// }

// export default Animal



//9월 1일

//연습문제 1,2 -App.js에서 진행

// //연습문제 3

// class Cart extends React.Component{
//     state = {
//         cart: []
//     }

//     //구현하기
//     addProduct = () => {
//       const { cart } = this.state
//       console.log(cart)
//       const product = prompt("원하시는 상품을 추가해주세요 !")
//       console.log(product)
//       this.setState(() => {
//       return cart.push(product)
//       })
//     }

//     // 구현하기
//     render(){
//         const { cart } = this.state 
//         console.log(cart)
//           return(
//             <>
//               <button onClick={this.addProduct}>상품추가하기</button>
//               <h1>상품목록</h1>
//               <h1>-----------------</h1>
//               {cart.map(c => {
//                 return(
//                   <h3>{c}</h3>
//                 )
//               })}
//             </>
//           )
//     }
// }
// export default Cart

// //연습문제 4

// class PhotoGallery extends React.Component{
//   state = {
//       photos: []
//   }

//   //구현하기
//   addPhoto = () => {
//     const { photos } = this.state
//     const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")
//     this.setState(() => {
//       return photos.push(photo)
//     })
//   }

//   // 구현하기
//   render(){
//     const { photos } = this.state
//     console.log(photos)
//     return(
//       <>
//         <button onClick={this.addPhoto}>사진추가하기</button>
//         <h1>포토 갤러리</h1>
//         <h1>----------</h1>
//         {photos.map(p => {
//           return(
//             <img src={p}></img>
//           )
//         })}
//       </>
//     )
//   }
// }
// export default PhotoGallery

// //연습문제 5

// class CommentFilter extends React.Component{
//   state =User {
//       comment: this.props.comment.split(' '),
//       insults: ['바보', '똥개', '그지', '임마', '새끼', '죽을']
//   }
//   filterComment = () => {
//       const { insults } = this.state // 댓글을 음절 단위로 끊기

//       for(let insult of insults){ // 욕설 필터링
//           this.setState((prevState) => {

//             return {comment: prevState.comment.filter(word => !word.includes(insult))}
//           })
//       }
//   }
//   componentDidMount(){
//       this.filterComment()
//   }
//   render(){
//       const { comment } = this.state
//       console.log(comment)
//       return (
//           <>
//               <h2>{comment.join(' ')}</h2>
//           </>
//       )
//   }
// }
// export default CommentFilter



// 9월 4일

//연습문제 1

//연습문제 2

// const users = [
//   {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//   {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//   {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//   {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//   {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//   {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//   {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//   {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//   {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//   {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]

// class User extends React.Component{
//   state = ''
//   render(){
//     return(
//       users.map((user, id) => {
//         if(user.age > 0 && Number.isInteger(user.age) && user.email.includes('@') && user.email.includes('.')){
//           return(
//             <div key={id}>
//               <h3>{user.name} ({user.age})</h3>
//               <h3>{user.city}</h3>
//               <h3>{user.email}</h3>
//               <h3>---------------</h3>
//             </div>
//           )
//         }
//       }) 
//     )
//   }
// }

// export default User

//연습문제 3 app.js



//9월 5일

// //연습문제 2

// class Lotto extends React.Component{
//   state = {
//     count: 0,
//     pickNumbers: []
//   }

//   increaseCount = () => {
//     this.setState({count: this.state.count + 1, pickNumbers: []})
//   }

//   pickRandomNumber = (min, max) => {
//     return Math.floor(Math.random() * (max-min+1)) + min
//   }

//   componentDidMount(){
//     this.countId = setInterval(this.increaseCount, 1000)
//   }

//   componentDidUpdate(){
//     if(this.state.pickNumbers.length === 0){
//       for(let i=0; i<6; i++){
//         const randomNumber = this.pickRandomNumber(1,45)
//         if(this.state.pickNumbers.indexOf(randomNumber) == -1){
//           this.state.pickNumbers.push(randomNumber)
//             }else{
//               i--
//             }

//       }
//       }
//       return this.state.pickNumbers
//   }

//   componentWillUnmount(){
//     clearInterval(this.countId)
//   }

//   render(){
//     let { count, pickNumbers } = this.state
//     const flex = {
//       display: 'flex',
//       margin: 'auto'
//     }
//     const style = {
//       margin: '5px',
//       border: 'solid 1px blue',
//       borderRadius: '50%',
//       padding: '10px',
//       width: '50px',
//       height: '50px',
//       lineHeight: '50px'
//     }

//     if(this.state.pickNumbers.length === 0){
//       for(let i=0; i<6; i++){
//         const randomNumber = this.pickRandomNumber(1,45)
//         if(this.state.pickNumbers.indexOf(randomNumber) == -1){
//           this.state.pickNumbers.push(randomNumber)
//             }else{
//               i--
//             }

//       }
//       }
      
//     console.log(pickNumbers)
    
//     return(
//       <>
//         <h1>로또번호 자동 생성기</h1>
//         <h2>{count}</h2>
//         <h2 style={flex}>{pickNumbers.map(num => {
//           return <span style={style}>{num}</span>
//         })}</h2>
        
//       </>
//     )
//   }
// }

// export default Lotto

//연습문제 3

const dummyData = [
  {
      word: 'apple',
      meaning: '사과'
  },
  {
      word: 'before',
      meaning: '이전의'
  },
  {
      word: 'clean',
      meaning: '깨끗한'
  },
  {
      word: 'dummy',
      meaning: '가짜의'
  },
  {
      word: 'emergent',
      meaning: '긴급한'
  },
  {
      word: 'famouse',
      meaning: '유명한'
  },
  {
      word: 'give',
      meaning: '(~을) 주다'
  },
  {
      word: 'humble',
      meaning: '검소한'
  },
  {
      word: 'ingrave',
      meaning: '조각하다'
  },
  {
      word: 'jungle',
      meaning: '밀림숲'
  },
  {
      word: 'korea',
      meaning: '대한민국'
  },

]
export default dummyData;