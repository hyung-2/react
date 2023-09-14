// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';
import './App.css';
// import Button from './Button';


/* 클래스형 컴포넌트와 함수형 컴포넌트의 state관리 비교 */
// //클래스형 - this값 사용.
// class App extends Component {
//   state = {
//     count: 0
//   }

//   increaseCount = () => {
//     this.setState({count: this.state.count + 1})
//   }

//   render(){
//     const { count } = this.state
//     return(
//       <div className='App'>
//         <h1>Count : {count}</h1>
//         <Button handleClick={this.increaseCount}>카운트 버튼</Button>
//       </div>
//     )
//   }
// }

// //함수형 - state값이 변경되면 useState를 제외한 이벤트핸들러 함수와 return 구문이 재실행
// function App(){
//   const [count, setCount] = useState(0) 
//   // const [변경할값(state), 변경할함수] = useState(변경할 값의 초기값(초기화))
//   console.log('카운트:', count)
  
//   const increaseCount = () => { //const나 let이 붙어줘야함
//     setCount(count + 1)
//     // setCount(다음 상태값)
//   }

//   return(
//     <div className='App'>
//       <h1>Count: {count}</h1>
//       <Button handleClick={increaseCount}>카운트 버튼</Button>
//     </div>
//   )
// }

/* state값이 두개일때의 비교 (사용자정보, 할일목록) */
// //클래스형
// class App extends Component {
//   state = {
//     //사용자 정보에 대한 상태
//     user: {
//       name: 'sunrise',
//       age: 23,
//       fruits: ['apple', 'banana', 'orange']
//     },
//     //할일 목록에 대한 상태
//     todos: [
//       {title: 'cleaning', done: false, description: 'cleaning my living room'},
//       {title: 'learning', done: true, description: 'learing react on tomorrow morning'},
//       {title: 'drinking', done: false, description: 'drinking soju with close friends'},
//     ]
//   }

//   //사용자의 이름을 변경하는 함수
//   changeName = () => {
//     const newUser = {...this.state.user, name: '새로운 이름'}
//     // const newUser = {원래유저정보(스프레드로 풀어줌), 변경하려는 프로퍼티값} - 원본을 복사하여 원하는값만 바꿔줌
//     this.setState({user: newUser})
//   }
//   //사용자의 할일을 추가하는 함수
//   addNewTodo = () => {
//     const newTodo = {title: '여행가기', done: false, description: '여름 휴가 가기'}
//     const todos = [newTodo, ...this.state.todos] //맨 앞에 복사되어 최신순으로 나타남, [...this.state.todos, newTodo]: 맨 뒤에 복사
//     this.setState({todos})
//   }

//   render(){
//     const { user, todos } = this.state
//     return(
//       <div className='App'>
//         <h1>사용자 정보</h1>
//         <h2>이름: {user.name} </h2>
//         <h2>나이: {user.age} </h2>
//         <h2>좋아하는 과일: {user.fruits.join(' ')} </h2> 
//         <Button handleClick={this.changeName}>사용자 이름 변경</Button>

//         <h1>사용자의 할일 목록</h1>
//         <Button handleClick={this.addNewTodo}>할일 추가</Button>
//         {todos.map((todo, id) => {
//           return(
//             <div key={id}>
//               <h2>할일 제목: {todo.title}  ({todo.done ? '종료' : '진행중'})</h2>
//               <p>할일 내용 : {todo.description}</p>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

// //함수형
// function App(){
//   //state값을 분리하여 작성 - 리액트훅을 사용하는 목적
//   //사용자 정보에 대한 상태관련 로직
//   const [user, setUser] = useState({
//     name: 'sunrise',
//     age: 23,
//     fruits: ['apple', 'banana', 'orange']
//   })
//   //할일목록 정보에 대한 상태관련 로직
//   const [todos, setTodos] = useState([
//     {title: 'cleaning', done: false, description: 'cleaning my living room'},
//     {title: 'learning', done: true, description: 'learing react on tomorrow morning'},
//     {title: 'drinking', done: false, description: 'drinking soju with close friends'},    
//   ])

//   //사용자 이름을 변경하는 함수
//   const changeName = () => { //초기값과 똑같은 지역변수를 선언하면 에러가뜬다(초기화 하기전에 상태값에 접근을 할수 없음)
//     const newUser = {...user, name: '새로운 이름'}
//     setUser(newUser)
//   }

//   //할일 목록을 추가하는 함수
//   const addNewTodo = () => {
//     const newTodo = {title: '여행가기', done: false, description: '여름 휴가 가기'}
//     const newTodos = [newTodo, ...todos]
//     setTodos(newTodos)
//   }
//   return(
//     <div className='App'>
//       <h1>사용자 정보</h1>
//       <h2>이름: {user.name}</h2>
//       <h2>나이: {user.age}</h2>
//       <h2>좋아하는 과일: {user.fruits.join(' ')}</h2>
//       <Button handleClick={changeName}>사용자 이름 변경</Button>

//       <h1>사용자 할일 목록</h1>
//       <Button handleClick={addNewTodo}>할일 추가</Button>
//       {todos.map((todo, id) => {
//         return(
//           <div key={id}>
//             <h2>할일 제목: {todo.title}  ({todo.done ? '종료' : '진행중' })</h2>
//             <p>{todo.description}</p>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

/* 함수형 컴포넌트에서 라이프사이클 메서드 사용하기 */
/* Effect Hook 은 우선 컴포넌트가 초기 렌더링될때 비동기 함수로 자바스크립트에 의해 등록해둔다.  이후 상태가 변경되서 리렌더링될때마다 실행되거나 초기에 한번만 실행될수도 있다. 
   Effect Hook 의 두번째 의존성 배열이 빈 배열이 아닌 경우 Effect Hook 안의 콜백함수는 의존성 배열에 주어진 state 값이 변경될때마다 새로 업데이트된 state 값을 삽입하여 콜백함수를 새로 생성한다.  */
// function App(){
//   const [count, setCount] = useState(0)

//   const increaseCount = () => {
//     setCount(count + 1)
//   }

//   // componenetDidUpdate 와 유사하다
//   useEffect(() => {  // useEffect(콜백함수, 의존성배열)
//     document.title = `You clicked ${count} times`
//   }, [count])

//   return(
//     <div className='App'>
//       <h1>Count: {count}</h1>
//       <Button handleClick={increaseCount}>카운트 증가</Button>
//     </div>
//   )
// }

/* Effect Hook를 이용해 1초마다 자동으로 숫자 카운트 하기, 여러개의 Effect Hook 사용하기 */
/* App 컴포넌트가 재실행되면 useEffect의 콜백함수가 새로 만들어지면서 최신 state값이 주입됨
 의존성 배열에 특정 state값이 설정되어 있으면 해당 state값이 변경될때마다 콜백함수가 실행되고 cleanup함수도 실행됨 */
// function App(){
//   //1초마다 자동으로 숫자를 카운팅하는 로직
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     const increaseCount = () => { //timerId값에 접근하기위해 useEffect함수 안에 넣어줌
//       clearTimeout(timerId) //cleanup함수가 있기때문에 없어도되긴 하지만 한번 더 확인용
//       setCount(count + 1)
//     }
//     const timerId = setTimeout(increaseCount, 1000)
    
//     //componentWillUnmount의 역할을 해준다고 보면된다. 다른점:count값이 바뀔때마다 실행되고 willUnmount는 컴포넌트가 사라질때 실행
//     return () => { //콜백함수 (cleanup) : 설정한것 해제
//       clearTimeout(timerId)
//     }
//   },[count])

//   //1초마다 자동으로 랜덤숫자 보여주기
//   //리액트 훅 : 서로 관련된 상태관련 로직을 함수처럼 묶어주는 역할
//   const [number, setNumber] = useState(0)

//   useEffect(() => {
//     const pickRandomNumber = () => {
//       clearTimeout(timerId)
//       const randNum = Math.floor(Math.random()*100)
//       setNumber(randNum)
//     }
//     const timerId = setTimeout(pickRandomNumber, 1000)
//     return() => {
//       clearTimeout(timerId)
//     }
//   },[count]) //의존성배열에 number를 넣으면 number값이 이전과 같을때 실행이 되지 않음(타이머 설정안됨:number값이 바뀔때 실행되기 때문) ->count를 넣어줘 해결(무조건 1씩 증가)
//   //의존성 배열을 설정하지 않은 경우 : 컴포넌트가 랜더링(재실행) 될때마다 항상 useEffect 안의 콜백함수와 cleanup함수가 실행됨
  
//   return(
//     <div className='App'>
//       <h1>숫자 자동카운트</h1>
//       <h2>Count: {count}</h2>
//       <br/>
//       <h1>?랜덤 숫자?</h1>
//       <h2>랜덤 숫자: {number}</h2>
//     </div>
//   )
// }

/* 1초마다 랜덤한 이미지,영단어 보여주기  */
// import useCounter from './useCounter';
// import words from './DictionaryData';
// import animals from './AnimalData';

// function App(){
//   //useCounter의 counter값이 바뀌면서 App이 재실행 -> 다시 useCounter로 들어감

//   //이미지 갤러리 로직
//   const index = useCounter(animals.length)
//   const animal = animals[index] //특정 동물정보 추출

//   //영단어장 로직
//   const index2 = useCounter(words.length)
//   const dic = words[index2]

//   return(
//     <div style={{width: '50%', margin:'0 auto', textAlign:'center'}}>
//       <h1>이미지 갤러리</h1>
//       <img src={animal.src} alt={animal.title}></img>
//       <h2>{animal.title}</h2>

//       <br/>
//       <h1>영단어장</h1>
//       <h2>{dic.word}</h2>
//       <h3>{dic.meaning}</h3>
//     </div>
//   )
// }

/* 서버에서 데이터가져온후 컴포넌트 마운트,해제시에만 Effect Hook 실행  */
function App(){
  const [movies, setMovies] = useState([])

  //의존성 배열에 빈배열 설정시 componentDidMount, + componentWillUnmount(return값) 으로 동작
  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
    .then(res => res.json())
    .then(result => {
      const {data: {movies}} = result
      console.log('useEffect-', movies)
      setMovies(movies)
    })
  },[])

  return(
    <div className='App'>
      <h1>영화목록</h1>
      {movies.map((movie, id) => {
        return <div key={id}>{movie.title}</div>
      })}
    </div>
  )
}

/* 연습문제 1 */
// import Modal from './Modal'
// function App(){
//   const [open, openModal] = useState(false)

//   const openM = () => {
//     openModal(true)
//   }

//   const closeModal = () => {
//     openModal(false)
//   }

//   return(
//     <div className='App'>
//       <Button handleClick={openM}>할일 추가</Button>
//       <Modal open={open}>
//         <div className='header'>새 할일을 추가하시겠습니까?</div>
//         <div className='body'>
//           <label>할일 제목: <input type='text'></input></label><br/>
//           <label>할일 내용: <input type='text'></input></label>
//         </div>
//         <div className='footer'>
//           <Button size='small'>추가</Button>
//           <Button size='small' handleClick={closeModal}>닫기</Button>
//         </div>
//       </Modal>
//     </div>
//   )
// }

/* 연습문제 2 */
// function App(){
//   const [count, setCount] = useState(0)

//   const showUI = (cnt) => {
//     let ui = null;
//     switch(cnt){
//       case 0:
//         ui = <h1>Home</h1>
//         break;
//       case 1:
//         ui = <h1>About</h1>
//         break;
//       case 2:
//         ui = <h1>Detail</h1>
//         break;
//       default:
//         ui = <h1>NotFound</h1>
//     }
//     return ui
//   }

//   const increase = () => {
//     setCount(count + 1)
//   }

//   return(
//     <>
//     {showUI(count)}
//     <Button handleClick={increase}>카운팅</Button>
//     </>
//   )
// }

/* 연습문제 3 */
// import animals from './AnimalData';
// function App(){
//   const [count, setCount] = useState(0)
//   const animal = animals[count%animals.length]
//   useEffect(() => {
//     const increaseCount = () =>{
//       setCount(count + 1)
//     }

    // const timerId = setInterval(increaseCount,1000)
//     return() => {
//       clearTimeout(timerId)
//     }
//   })
//   return(
//     <div className='App'>
//       <h1>이미지 갤러리</h1>
//       <img src={animal.src} alt={animal.title}></img>
//       <h2>{animal.title}</h2>
//     </div>
//   )
// }

/* 연습문제 4 */
// import Movie from './movie'
// function App(){
//   const [loading, setLoading] = useState(true)

//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then(res => res.json())
//     .then(result => {
//       const {data: {movies}} = result
//       console.log(movies)
//       setLoading(false)
//       setMovies(movies)
//     })
//   },[]) 

//   if(loading){
//     return(
//         <div className='loading'>
//           <h1>Loading...</h1>
//         </div>
//     )
//   }else{
//     return(
//       <div className='App'>
//         {movies.map(movie => {
//           return(
//             <Movie 
//             key={movie.id}
//             title={movie.title}
//             genres={movie.genres}
//             cover={movie.medium_cover_image}
//             summary={movie.summary}
//             year={movie.year}
//             rating={movie.rating}
//             ></Movie>
//           )
//         })}
//       </div>
//     )

//   }
// }

/* 연습문제 5 */
// function App(){
//   const [numbers, setNumbers] = useState('')

//   const pickRandomNumber = (min, max) => {return Math.floor(Math.random() * (max-min+1)) + min}
//   const isDuplicated = (nums, picked) => {
//     return nums.find(num => num === picked)
//   }
//   const getLottoNum = (numbers) => {
//     const picked = pickRandomNumber(1, 45)
//     const duplicatedNum = isDuplicated(numbers, picked)
//     if(duplicatedNum){
//       console.log(duplicatedNum, '뽑기')
//       getLottoNum(numbers)
//     }else{
//       numbers.push(picked)
//     }
//   }
//   const showRandomNumber = () => {
//     const numbers = []
//     while(numbers.length < 6){
//       getLottoNum(numbers)
//     }
//     setNumbers(numbers.join(' '))
//   }

//   useEffect(() => {
//     const timerId = setTimeout(showRandomNumber, 1000)
//     // console.log(timerId)
//     return() => {
//       clearTimeout(timerId)
//     }
//   },[numbers])

//   return(
//     <div className='App'>
//       <h1>로또번호 자동 생성기</h1>
//       <h1>{numbers}</h1>
//     </div>
//   )
// }

/* 연습문제 6 */
// import Movie from './movie';
// function App(){
//   const [movies, setmovies] = useState([])


//   useEffect(() => {
//     fetch('https://yts.mx/api/v2/list_movies.json?limit=12')
//     .then(res => res.json())
//     .then(data => {
//       const {data: {movies}} = data
//       console.log(movies)
//       setmovies(movies)
//     })
//   })

//   return(
//     <div className='App'>
//       {movies.map((movie, id) => {
//         return(
//           <Movie
//           key={id}
//           title={movie.title}
//           genres={movie.genres}
//           cover={movie.medium_cover_image}
//           summary={movie.summary}
//           year={movie.year}
//           rating={movie.rating}
//           />
//         )
//       })}
//     </div>
//   )
// }

/* 연습문제 7 */
// import Words from './DictionaryData';

// function App(){
//   const [words, setWords] = useState(Words)

//   const Remove = (id, e) =>{
//     const word= e.target.previousSibling.innerText
//     console.log(word)
//     alert(`You want to delete word : ${word}?`)
//     const newWords = words.filter((w, index) => index !== id)
//     setWords(newWords)
//   }


//   return(
//     <div>
//       <h1 style={{textAlign:'center'}}>Word List</h1>
//       {words.map((w, id) => {
//         return(
//           <div key={id} className='word'>
//             <h2>{w.word}</h2>
//             <Button size='small' type='button' handleClick={(e) => Remove(id, e)}>삭제</Button>
//           </div>
//         )
//       })}
//     </div>
//   )
// }

/* 연습문제 8 */
// import imgs from './dummyData'
// function App(){
//   const [index, setIndex] = useState(0)

//   const decreaseIndex = () => {
//     const nextIndex = index - 1
//     setIndex(nextIndex < 0 ? imgs.length - 1 : nextIndex)
//   }

//   const increaseIndex = () => {
//     const nextIndex = index + 1
//     setIndex(nextIndex > imgs.length -1 ? 0 : nextIndex)
//   }

//   const path = imgs[index].src
//   const title = imgs[index].title

//   return(
//     <div className='App'>
//       <div className='img-container'>
//         <h2>{title}</h2>
//         <img src={path} alt={title}></img>
//       </div>

//       <div className='control-btns'>
//         <Button handleClick={decreaseIndex}>이전</Button>
//         <Button handleClick={increaseIndex}>다음</Button>
//       </div>
//     </div>
//   )
// }

/* 연습문제 9 */
// function App(){
//   const [id, setId] = useState('')
//   const [pw, setPw] = useState('')

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     console.log(name, value)
//     if(name === 'id'){
//       setId(value)
//     }else if(name === 'pw'){
//       setPw(value)
//     }
//   }
  
//   const login = (e) => {
//     e.preventDefault()
//     console.log('로그인')
//   }

//   return(
//     <div className='App'>
//       <form>
//         <label>ID
//           <input type='text' placeholder='Type your Id...' name='id' value={id} onChange={handleChange}></input>
//         </label>
//         <br/>
//         <label>PW
//           <input type='password' placeholder='Type your Pw...' name='pw' value={pw} onChange={handleChange}></input>
//         </label>
//         <div className='login-btn'>
//           <Button handleClick={login}>로그인</Button>
//         </div>
//       </form>
//     </div>
//   )
// }

/* 연습문제 10 */
function App(){
  const [fileName, setFile] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const fileInput = React.createRef()

  const isValid = (type) => {
    return type === 'image'
  }

  const handleChange = (e) => {
    console.log(e.target.files[0])
    const file = e.target.files[0]
    const imgSrc = URL.createObjectURL(file)

    if(isValid(file.type.split('/')[0])){
      setFile(file.name)
      setImgSrc(imgSrc)
    }else{
      setFile('File is not valid type!')
      setImgSrc('')
    }
  }

  const openFileWindow = () => {
    console.log('에에')
    fileInput.current.click()
  }
  return(
    <div className='App'>
      <h1>{fileName}</h1>
      {imgSrc !== '' && <img src={imgSrc} alt='preview-img' width='300px' height='400px'></img>}
      <input className='Upload' type='file' onChange={handleChange} ref={fileInput} accept='image/*'></input>
      <Button handleClick={openFileWindow}>업로드</Button>
    </div>
  )
}
export default App;