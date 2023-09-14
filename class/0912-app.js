import React, { useMemo, useRef, useState, useCallback, useReducer } from 'react';
import './App.css';
import UserList from './UserList'
import CreateUser from './CreateUser';

// function countActiveUsers(users) {
//   console.log('활성 사용자수를 세는중...')
//   return users.filter(user => user.active).length //active한 사용자 숫자
// }

// function App(){
//   const [inputs, setInputs] = useState({ //초기값 설정
//     username: '',
//     email: ''
//   })

//   const { username, email } = inputs //초기값들을 프로퍼티로 풀어주기

//   const onChange = useCallback(e => {
//     const { name, value } = e.target
//     setInputs(inputs => ({ //inputs가 객체니까 새로운 객체 만들어줌
//       ...inputs, //불변성(immutability): 원본은 조회만 하고 새로운 객체나 배열을 만들어 state값 변경
//       [name]: value //input의 name이 state의 프로퍼티값과 동일해서 [name]으로 사용 (username, email)
//     }))
//   }, []) 
//   /* 아래함수를 위와같이 바꾸면 초기 랜더링시에 함수가 한번만 생성되더라도
//      최신 state 값을 조회할 수 있다.(의존성배열이 없어도 최신값 업데이트)

//     setInputs({ //inputs가 객체니까 새로운 객체 만들어줌
//         ...inputs, //불변성(immutability): 원본은 조회만 하고 새로운 객체나 배열을 만들어 state값 변경
//         [name]: value //input의 name이 state의 프로퍼티값과 동일해서 [name]으로 사용 (username, email)
//       })
//   }, [inputs]) 

//   */

//   const [users, setUsers] = useState([
//       {id: 1, username: 'velopert', email: 'public.velopert@gmail.com', active: true },
//       {id: 2, username: 'tester', email: 'tester@example.com', active: false },
//       {id: 3, username: 'liz', email: 'liz@example.com', active: false }
//   ])

//   const nextId = useRef(4)
//   const onCreate = useCallback(() => { //사용자 추가
//     const user = {
//       id: nextId.current,
//       username, // username: username
//       email
//     }
//     setUsers(users => [...users, user]) //setUsers([...users, user]) 에서 바꿈으로써 항상 최신값 들어옴
//     // Todo: 사용자 추가
//     nextId.current += 1 
//     setInputs({ //초기화(입력창 비워주기)
//       username: '',
//       email: ''
//     })
//   }, [username, email]) //의존성배열은 들어오는 최신값이 없는것들을 넣어줌(아니면 사용중인 state값)

//   const onRemove = useCallback(id => {
//     setUsers(users => users.filter(user => user.id !== id)) //user.id가 id값이 아닌것들을 새로운배열에담음(filter) - 삭제한건 배열에없기때문에 삭제됨
//   }, [])

//   const onToggle = useCallback(id => {
//     setUsers(users =>
//       users.map(user => user.id === id ? {...user, active: !user.active} : user)
//     )
//   }, [])

//   /* useMemo */
//   //users가 변경될때만 countActiveUsers함수 실행 - 성능 최적화(useMemo가 없으면 관련없는 값이 바뀌어도 리랜더링)
//   //users 상태가 변경되지 않으면 이전에 연산한 값 재사용
//   const count = useMemo(() => countActiveUsers(users), [users]) 

//   return (
//     <>
//       <CreateUser
//         username={username}
//         email={email}
//         onChange={onChange}
//         onCreate={onCreate}
//       />
//       <UserList 
//         users={users} 
//         onRemove={onRemove} 
//         onToggle={onToggle}
//       />
//       <div>활성 사용자 수 : <b>{count}</b></div>
//     </>
//   )
// }

/* useReducer 사용하기 */
// function countActiveUsers(users) {
//   console.log('활성 사용자 수를 세는중...');
//   return users.filter(user => user.active).length;
// }

// const initialState = {
//   inputs: {
//     username: '',
//     email: ''
//   },
//   users: [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false
//     }
//   ]
// };

// function reducer(state, action){
//   switch(action.type){
//     case 'CHANGE_INPUT':
//       return { //initialState의 메모리값을 바꿈
//         ...state,
//         inputs: { //inputs만 변경한다
//           ...state.inputs,
//           [action.name]: action.value
//         }
//       }
//     case 'CREATE_USER':
//       return {
//         inputs: initialState.inputs, //initialState가 이 함수에 들어오고 잇으므로 사용가능
//         users: state.users.concat(action.user)
//       }
//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map(user => 
//           user.id === action.id ? {...user, active: !user.active} : user)
//       }
//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter(user => user.id !== action.id)
//       }
//     default:
//       return state
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   const { users, inputs } = state
//   const { username, email } = inputs
//   const nextId = useRef(4)

//   const onChange = useCallback(e => {
//     const { name, value } = e.target //input에서 값을 받아옴
//     dispatch({
//       type: 'CHANGE_INPUT',
//       name, // 'username'와'email' 구분
//       value // 사용자가 입력한 값
//     })
//   }, [])

//   const onCreate = useCallback(() => {
//     dispatch({
//       type: 'CREATE_USER',
//       user: {
//         id: nextId.current,
//         username,
//         email
//       }
//     })
//     nextId.current += 1
//   }, [username, email]) //최신값이 들어와야하므로 의존성배열에 넣어줌

//   const onToggle = useCallback(id => {
//     dispatch({
//       type: 'TOGGLE_USER',
//       id
//     })
//   }, [])

//   const onRemove = useCallback(id => {
//     dispatch({
//       type: 'REMOVE_USER',
//       id
//     })
//   }, [])

//   const count = useMemo(() => countActiveUsers(users), [users]);

//   return (
//     <>
//       <CreateUser 
//         username={username} 
//         email={email} 
//         onChange={onChange} 
//         onCreate={onCreate} 
//       />
//       <UserList 
//         users={users} 
//         onToggle={onToggle}
//         onRemove={onRemove}
//       />
//       <div>활성사용자 수 : {count}</div>
//     </>
//   );
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

const initialState = {
  toggle: false,
  products: [],
  keyword: '',
  close: true,
}

function reducer(state, action){
  switch(action.type){
    case 'CHANGE_TOGGLE':
      return  !action.toggle //toggle반전
    case 'SEARCH_WORD':
      return //keyword뽑기
    case 'FETCHING':
      return action.products
    default:
      return state 
  }
}


function App(){
  const [ state, dispatch ] = useReducer(reducer, initialState)
  console.log(state)
  const { toggle, products, keyword, close } = state
  console.log(products)

  const changeToggle = useCallback(() => {
    dispatch({
      type: 'CHANGE_TOGGLE',
      toggle,
    })
  }, [])

  const searching = useCallback((keyword, e) => {
    dispatch({
      type: 'SEARCH_WORD',
      keyword,
    })
  }, [])

  const handleScroll = () => {
    const nav = document.querySelector('nav')
    window.pageYOffset > 100 ? nav.classList.add('shadow') : nav.classList.remove('shadow')
  }

  const totop = () => {
    return window.scrollTo({top:0, behavior: 'smooth'})
  }

  useEffect(() => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res => res.json())
    .then(result => {
      console.log(result)
      dispatch({
        type: 'FETCHING',
        products: result
      })
      dispatch({
        type: 'CLOSE_MODAL',
        close
      })
    })
  })
  console.log(products)
  const sortProducts = [...products]
  const copyProducts = [...products]
  const filtered = copyProducts.filter((pro) => {
    const lowerName = pro.name.toLowerCase()
    const upperName = pro.name.toUpperCase()
    return lowerName.includes(keyword) || upperName.includes(keyword)
  })



  return(
    <>
      <Nav toggle={toggle} items={menu} changeToggle={changeToggle} ></Nav>
      {keyword === '' ?
        toggle ? 
        <ProductList products={sortProducts.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={products}/>  
        :
        toggle ? 
        <ProductList products={filtered.sort(function(a,b){return a.price - b.price})}/> : <ProductList products={filtered}/>
      }
      <Modal close={close}>데이터 로드 완료!</Modal>
      <Button btnclass='totop' totop={totop}>To top</Button>
    </>
  )
}


export default App;
